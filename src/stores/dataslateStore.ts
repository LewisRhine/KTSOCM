import { create } from 'zustand'
import {
  Dataslate,
  getDataslate,
  getDataslates,
  updateDataslate,
} from '../data/dataslate.ts'

interface DataslateState {
  dataslates?: Dataslate[]
  selectedDataslate?: Dataslate
  error?: string
  loading: boolean
  getDataslates: () => Promise<void>
  getDataslate: (dataslateId: string) => Promise<void>
  saveHistory: (newHistory: string) => Promise<void>
}

const useDataslateStore = create<DataslateState>((set, get) => ({
  dataslates: undefined,
  selectedDataslate: undefined,
  error: undefined,
  loading: false,
  getDataslates: async () => {
    const { data } = await getDataslates()

    if (data) set({ dataslates: data })
  },
  getDataslate: async (dataslateId) => {
    set({ loading: true, error: undefined })
    const { data, error } = await getDataslate(dataslateId)

    if (error) {
      set({ loading: false, error })
      return
    }

    if (data) set({ loading: false, selectedDataslate: data })
  },
  saveHistory: async (newHistory) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate: Dataslate = { ...selectedDataslate }
    set({ loading: true, error: undefined })
    newDataslate.history = newHistory
    const { data, error } = await updateDataslate(newDataslate)

    if (error) {
      set({ loading: false, error })
      return
    }

    if (data) set({ loading: false, selectedDataslate: data })
  },
}))

export default useDataslateStore
