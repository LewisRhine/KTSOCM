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
import { Requisition } from '../data/requisition.ts'

interface DataslateState {
  dataslates?: Dataslate[]
  selectedDataslate?: Dataslate
  loading: boolean

  getDataslates: () => Promise<void>
  getDataslate: (dataslateId: string) => Promise<void>
  saveHistory: (newHistory: string) => void
  saveQuirks: (newQuirks: string) => void
  saveNotes: (newNotes: string) => void
  saveBaseInfo: (baseName: string, baseDescription: string) => void
  increasePoints: () => void
  decreasePoints: () => void
  equipmentDrop: () => void
  undoEquipmentDrop: () => void
  addToStash: (equipment: Equipment) => void
  removeFromStash: (equipment: Equipment) => void
  saveStash: (stash: Stash) => void
  addToStrategicAssets: (strategicAssets: StrategicAssets) => void
  removeFromStrategicAssets: (strategicAssets: StrategicAssets) => void
  takeRequisition: (requisition: Requisition) => void
}

const setError = useSystemError.getState().setError

const saveDataslate = (
  newDataslate: Dataslate,
  set: (dataslateState: DataslateState | Partial<DataslateState>) => void,
) => {
  async function call() {
    const { data, error } = await updateDataslate(newDataslate)
    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  }

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  call()
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

  saveHistory: (newHistory) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate: Dataslate = { ...selectedDataslate }
    newDataslate.history = newHistory

    saveDataslate(newDataslate, set)
  },

  saveQuirks: (newQuirks) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate: Dataslate = { ...selectedDataslate }
    newDataslate.quirks = newQuirks

    saveDataslate(newDataslate, set)
  },

  saveNotes: (newNotes) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate: Dataslate = { ...selectedDataslate }
    newDataslate.notes = newNotes

    saveDataslate(newDataslate, set)
  },

  saveBaseInfo: (baseName, baseDescription) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.name = baseName
    newDataslate.baseOfOperations.description = baseDescription

    saveDataslate(newDataslate, set)
  },

  increasePoints: () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints++

    saveDataslate(newDataslate, set)
  },

  decreasePoints: () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints--

    saveDataslate(newDataslate, set)
  },

  equipmentDrop: () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate || selectedDataslate.reqPoints <= 0) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints--
    newDataslate.baseOfOperations.stash.availableEP += 5

    saveDataslate(newDataslate, set)
  },

  undoEquipmentDrop: () => {
    const selectedDataslate = get().selectedDataslate
    const availableEP =
      selectedDataslate?.baseOfOperations.stash.availableEP ?? 0

    if (!selectedDataslate || availableEP < 5) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints++
    newDataslate.baseOfOperations.stash.availableEP -= 5

    saveDataslate(newDataslate, set)
  },

  addToStash: (equipment: Equipment) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const { availableEP, availableEquipment } =
      selectedDataslate.baseOfOperations.stash

    if (!equipment.rare && availableEP < equipment.cost) return

    if (equipment.rare) {
      const alreadyHave = !!availableEquipment.find(
        (value) => value.equipment.name === equipment.name,
      )

      if (alreadyHave) return
    }

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.stash = {
      availableEP: equipment.rare ? availableEP : availableEP - equipment.cost,
      availableEquipment: [
        ...availableEquipment,
        {
          equipment: equipment,
          isEquipped: false,
        },
      ],
    }

    saveDataslate(newDataslate, set)
  },

  removeFromStash: (equipment: Equipment) => {
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
      availableEP: equipment.rare ? availableEP : availableEP + equipment.cost,
      availableEquipment,
    }

    saveDataslate(newDataslate, set)
  },

  saveStash: (stash: Stash) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.stash = stash

    saveDataslate(newDataslate, set)
  },

  addToStrategicAssets: (strategicAssets: StrategicAssets) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.strategicAssets.push(strategicAssets)
    newDataslate.reqPoints--

    saveDataslate(newDataslate, set)
  },

  removeFromStrategicAssets: (asset: StrategicAssets) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const strategicAssetIndex =
      selectedDataslate.baseOfOperations.strategicAssets.findIndex(
        ({ name }) => name === asset.name,
      )

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.strategicAssets.splice(strategicAssetIndex, 1)
    newDataslate.reqPoints++

    saveDataslate(newDataslate, set)
  },

  takeRequisition: (requisition: Requisition) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }

    const { name } = requisition

    if (name === 'Equipment Drop')
      newDataslate.baseOfOperations.stash.availableEP += 5

    if (name === 'Asset Acquired') newDataslate.baseOfOperations.assetCapacity++

    newDataslate.reqPoints--

    saveDataslate(newDataslate, set)
  },
}))

export default useDataslateStore
