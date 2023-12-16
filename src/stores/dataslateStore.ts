import { deleteDataslate } from './../data/dataslate'
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
import { isStanderSpecOps, SpecOps } from '../data/specOps.ts'

export interface DataslateState {
  dataslates?: Dataslate[]
  selectedDataslate?: Dataslate
  loading: boolean

  getDataslates: () => Promise<void>
  getDataslate: (dataslateId: string) => Promise<void>
  deleteDataslate: (dataslate: Dataslate) => void
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
  assignSpecOps: (specOps: SpecOps) => void
  progressCurrentSpecOps: () => void
  degreesCurrentSpecOps: () => void
  abandonCurrentSpecOps: () => void
  checkCommendationCurrentSpecOps: (index: number) => void
  completeCurrentSpecOps: () => void
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

    const fromDataslate = get().dataslates?.find(
      ({ id }) => id.toString() === dataslateId,
    )

    if (fromDataslate) {
      set({ loading: false, selectedDataslate: fromDataslate })
      return
    }

    const { data, error } = await getDataslate(dataslateId)

    set({ loading: false })
    if (error) setError(error)
    if (data) set({ selectedDataslate: data })
  },

  deleteDataslate: async (dataslate) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    deleteDataslate(dataslate)
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

  assignSpecOps: (specOps: SpecOps) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return

    // check if user is on this specOps already
    if (selectedDataslate.currentSpecOps?.name === specOps.name) {
      setError(`You are already on a ${specOps.name} Spec Ops!`)
      return
    }

    // Off for beta testing
    // check if the user has completed this spec op in the last 3 times
    // const lastTwoCompleted = selectedDataslate.completedSpecOps.slice(-2)
    // if (lastTwoCompleted?.find(({ name }) => specOps.name === name)) {
    //   setError(
    //     'A kill team cannot be assigned to a completed Spec Op again until it has completed two other Spec Ops',
    //   )
    //   return
    // }

    const newDataslate = { ...selectedDataslate }
    if (newDataslate.currentSpecOps) {
      newDataslate.completedSpecOps.push(newDataslate.currentSpecOps)
    }

    newDataslate.currentSpecOps = specOps

    saveDataslate(newDataslate, set)
  },

  progressCurrentSpecOps: () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    if (!newDataslate?.currentSpecOps) return

    if (!isStanderSpecOps(newDataslate.currentSpecOps)) return

    const { operationOne, operationTwo } = newDataslate.currentSpecOps
    const { gamesNeededToCompleted } = operationOne

    if (!operationOne.complete) {
      if (operationOne.gamesCompleted < gamesNeededToCompleted) {
        operationOne.gamesCompleted++
      }

      if (operationOne.gamesCompleted >= gamesNeededToCompleted) {
        operationOne.complete = true
      }

      saveDataslate(newDataslate, set)
      return
    }

    if (!operationTwo.complete) {
      operationTwo.complete = true
      saveDataslate(newDataslate, set)
    }
  },

  degreesCurrentSpecOps: () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    if (!newDataslate?.currentSpecOps) return

    if (!isStanderSpecOps(newDataslate.currentSpecOps)) return

    const { operationOne, operationTwo } = newDataslate.currentSpecOps
    const { gamesCompleted } = operationOne

    if (operationTwo.complete) {
      operationTwo.complete = false
      saveDataslate(newDataslate, set)
      return
    }

    if (operationOne.complete) {
      operationOne.complete = false
      operationOne.gamesCompleted--
      saveDataslate(newDataslate, set)
      return
    }

    if (!operationOne.complete && gamesCompleted > 0) {
      operationOne.gamesCompleted--
      saveDataslate(newDataslate, set)
      return
    }
  },

  abandonCurrentSpecOps: () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    if (!newDataslate?.currentSpecOps) return

    newDataslate.currentSpecOps = undefined
    saveDataslate(newDataslate, set)
  },

  checkCommendationCurrentSpecOps: (index: number) => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    if (!newDataslate?.currentSpecOps) return

    if (index >= newDataslate.currentSpecOps.commendations.length) return

    newDataslate.currentSpecOps.commendations[index].claimed =
      !newDataslate.currentSpecOps.commendations[index].claimed

    saveDataslate(newDataslate, set)
  },

  completeCurrentSpecOps: () => {
    const selectedDataslate = get().selectedDataslate
    if (!selectedDataslate) return
    const newDataslate = { ...selectedDataslate }
    if (!newDataslate?.currentSpecOps) return

    newDataslate.completedSpecOps.unshift(newDataslate.currentSpecOps)
    newDataslate.currentSpecOps = undefined

    saveDataslate(newDataslate, set)
  },
}))

export default useDataslateStore
