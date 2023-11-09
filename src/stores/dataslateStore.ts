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
import { Requisition } from '../data/requisition.ts'

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
  saveStash: (stash: Stash) => Promise<void>
  addtoStrategicAssets: (strategicAssets: StrategicAssets) => Promise<void>
  removeFromStrategicAssets: (strategicAssets: StrategicAssets) => Promise<void>
  takeRequisition: (requisition: Requisition) => Promise<void>
}

const setError = useSystemError.getState().setError

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

    const { data, error } = await updateDataslate(newDataslate)

    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  saveQuirks: async (newQuirks) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate: Dataslate = { ...selectedDataslate }
    newDataslate.quirks = newQuirks

    const { data, error } = await updateDataslate(newDataslate)

    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  saveNotes: async (newNotes) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate: Dataslate = { ...selectedDataslate }
    newDataslate.notes = newNotes

    const { data, error } = await updateDataslate(newDataslate)

    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  saveBaseInfo: async (baseName, baseDescription) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.name = baseName
    newDataslate.baseOfOperations.description = baseDescription

    const { data, error } = await updateDataslate(newDataslate)

    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  increasePoints: async () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints++
    const { data, error } = await updateDataslate(newDataslate)

    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  decreasePoints: async () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints--
    const { data, error } = await updateDataslate(newDataslate)

    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  equipmentDrop: async () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate || selectedDataslate.reqPoints <= 0) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.reqPoints--
    newDataslate.baseOfOperations.stash.availableEP += 5

    const { data, error } = await updateDataslate(newDataslate)

    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  saveStash: async (stash: Stash) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.stash = stash

    const { data, error } = await updateDataslate(newDataslate)

    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  addtoStrategicAssets: async (strategicAssets: StrategicAssets) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }
    newDataslate.baseOfOperations.strategicAssets.push(strategicAssets)
    newDataslate.reqPoints--

    const { data, error } = await updateDataslate(newDataslate)
    console.log(selectedDataslate.baseOfOperations.strategicAssets)

    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
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

    const { data, error } = await updateDataslate(newDataslate)
    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  takeRequisition: async (requisition: Requisition) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    const newDataslate = { ...selectedDataslate }

    const { name } = requisition

    if (name === 'Equipment Drop')
      newDataslate.baseOfOperations.stash.availableEP += 5

    if (name === 'Asset Acquired') newDataslate.baseOfOperations.assetCapacity++

    newDataslate.reqPoints--

    const { data, error } = await updateDataslate(newDataslate)
    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },
}))

export default useDataslateStore
