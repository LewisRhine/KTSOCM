import { create } from 'zustand'
import { Dataslate, getDataslate, getDataslates } from '../data/dataslate.ts'

interface DataslateState {
  dataslates?: Dataslate[]
  selectedDataslate?: Dataslate
  error?: string
  loading: boolean
  getDataslates: () => Promise<void>
  getDataslate: (dataslateId: string) => Promise<void>
}

const useDataslateStore = create<DataslateState>((set) => ({
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
}))

export default useDataslateStore
