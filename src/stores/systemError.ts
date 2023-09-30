import { create } from 'zustand'

interface SystemErrorState {
  error: string | null
  setError: (error: string) => void
  resetError: () => void
}

const useSystemError = create<SystemErrorState>((set) => ({
  error: null,
  setError: (error: string) => set({ error: error }),
  resetError: () => set({ error: null }),
}))

export default useSystemError
