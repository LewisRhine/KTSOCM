import { StrategicAssets } from './../data/strategicAssets'
import { create } from 'zustand'
import {
  Dataslate,
  getDataslate,
  getDataslates,
  updateDataslate,
} from '../data/dataslate.ts'
import { Stash } from '../data/baseOfOperations.ts'
import useSystemError from './systemError.ts'
import { Equipment } from '../data/equipment.ts'

interface DataslateState {
  dataslates?: Dataslate[]
  selectedDataslate?: Dataslate
  loading: boolean

  getDataslates: () => Promise<void>
  getDataslate: (dataslateId: string) => Promise<void>
  saveHistory: (newHistory: string) => Promise<void>
  saveQuirks: (newQuirks: string) => Promise<void>
  saveNotes: (newNotes: string) => Promise<void>
  saveBaseInfo: (baseName: string, baseDescription: string) => Promise<void>
  increasePoints: () => Promise<void>
  decreasePoints: () => Promise<void>
  equipmentDrop: () => Promise<void>
  undoEquipmentDrop: () => Promise<void>
  addToStash: (equipment: Equipment) => Promise<void>
  removeFromStash: (equipment: Equipment) => Promise<void>
  saveStash: (stash: Stash) => Promise<void>
  addtoStrategicAssets: (strategicAssets: StrategicAssets) => Promise<void>
  removeFromStrategicAssets: (strategicAssets: StrategicAssets) => Promise<void>
}

const setError = useSystemError.getState().setError

const saveDataslate = async (
  newDataslate: Dataslate,
  set: (dataslateState: DataslateState | Partial<DataslateState>) => void,
) => {
  const { data, error } = await updateDataslate(newDataslate)
  if (error) setError(error)
  if (data) set({ selectedDataslate: data })
}

const useDataslateStore = create<DataslateState>((set, get) => ({
  dataslates: undefined,
  selectedDataslate: undefined,
  error: undefined,
  loading: false,

  getDataslates: async () => {
    set({ loading: true })

    const { data, error } = await getDataslates()

    set({ loading: false })
    if (error) setError(error)
    if (data) set({ dataslates: data })
  },

  getDataslate: async (dataslateId) => {
    set({ loading: true })

    const { data, error } = await getDataslate(dataslateId)

    set({ loading: false })
    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  saveHistory: async (newHistory) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate: Dataslate = { ...selectedDataslate }
    newDataslate.history = newHistory

    await saveDataslate(newDataslate, set)
  },

  saveQuirks: async (newQuirks) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate: Dataslate = { ...selectedDataslate }
    newDataslate.quirks = newQuirks

    await saveDataslate(newDataslate, set)
  },

  saveNotes: async (newNotes) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate: Dataslate = { ...selectedDataslate }
    newDataslate.notes = newNotes

    await saveDataslate(newDataslate, set)
  },

  saveBaseInfo: async (baseName, baseDescription) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.name = baseName
    newDataslate.baseOfOperations.description = baseDescription

    await saveDataslate(newDataslate, set)
  },

  increasePoints: async () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints++

    await saveDataslate(newDataslate, set)
  },

  decreasePoints: async () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints--

    await saveDataslate(newDataslate, set)
  },

  equipmentDrop: async () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate || selectedDataslate.reqPoints <= 0) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints--
    newDataslate.baseOfOperations.stash.availableEP += 5

    await saveDataslate(newDataslate, set)
  },

  undoEquipmentDrop: async () => {
    const selectedDataslate = get().selectedDataslate
    const availableEP =
      selectedDataslate?.baseOfOperations.stash.availableEP ?? 0

    if (!selectedDataslate || availableEP < 5) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints++
    newDataslate.baseOfOperations.stash.availableEP -= 5

    await saveDataslate(newDataslate, set)
  },

  addToStash: async (equipment: Equipment) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const { availableEP, availableEquipment } =
      selectedDataslate.baseOfOperations.stash

    if (availableEP < equipment.cost) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.stash = {
      availableEP: availableEP - equipment.cost,
      availableEquipment: [
        ...availableEquipment,
        {
          equipment: equipment,
          isEquipped: false,
        },
      ],
    }

    await saveDataslate(newDataslate, set)
  },

  removeFromStash: async (equipment: Equipment) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const { availableEP } = selectedDataslate.baseOfOperations.stash

    const availableEquipment = [
      ...selectedDataslate.baseOfOperations.stash.availableEquipment,
    ]

    const amountInStash = availableEquipment.filter(
      ({ equipment }) => equipment.name === equipment.name,
    ).length

    if (amountInStash <= 0) return

    const index = availableEquipment.findIndex(
      (value) => value.equipment.name === equipment.name,
    )

    if (index > -1) availableEquipment.splice(index, 1)

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.stash = {
      availableEP: availableEP + equipment.cost,
      availableEquipment,
    }

    await saveDataslate(newDataslate, set)
  },

  saveStash: async (stash: Stash) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.stash = stash

    await saveDataslate(newDataslate, set)
  },

  addtoStrategicAssets: async (strategicAssets: StrategicAssets) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.strategicAssets.push(strategicAssets)
    newDataslate.reqPoints--

    await saveDataslate(newDataslate, set)
  },

  removeFromStrategicAssets: async (asset: StrategicAssets) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const strategicAssetIndex =
      selectedDataslate.baseOfOperations.strategicAssets.findIndex(
        ({ name }) => name === asset.name,
      )

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.strategicAssets.splice(strategicAssetIndex, 1)
    newDataslate.reqPoints++

    await saveDataslate(newDataslate, set)
  },
}))

export default useDataslateStore
