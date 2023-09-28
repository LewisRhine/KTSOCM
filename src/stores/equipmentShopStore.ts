import { create } from 'zustand'
import { AvailableEquipment } from '../data/baseOfOperations.ts'
import { Equipment } from '../data/equipment.ts'
import useDataslateStore from './dataslateStore.ts'

interface EquipmentShopStoreState {
  availableEP: number
  availableEquipment: AvailableEquipment[]

  getAmountInStash: (equipment: Equipment) => number
  resetStore: () => void
  addToStash: (equipment: Equipment) => void
  removeFromStash: (equipment: Equipment) => void
  save: () => void
}

const useEquipmentShopStore = create<EquipmentShopStoreState>((set, get) => ({
  availableEP:
    useDataslateStore.getState().selectedDataslate?.baseOfOperations.stash
      .availableEP ?? 0,
  availableEquipment:
    useDataslateStore.getState().selectedDataslate?.baseOfOperations.stash
      .availableEquipment ?? [],

  getAmountInStash: (equipment: Equipment) =>
    get().availableEquipment.filter(
      (value) => value.equipment.name === equipment.name,
    ).length,

  resetStore: () => {
    set({
      availableEP:
        useDataslateStore.getState().selectedDataslate?.baseOfOperations.stash
          .availableEP ?? 0,
      availableEquipment:
        useDataslateStore.getState().selectedDataslate?.baseOfOperations.stash
          .availableEquipment ?? [],
    })
  },

  addToStash: (equipment: Equipment) => {
    if (get().availableEP < equipment.cost) return

    set({
      availableEP: get().availableEP - equipment.cost,
      availableEquipment: [
        ...get().availableEquipment,
        {
          equipment: equipment,
          isEquipped: false,
        },
      ],
    })
  },

  removeFromStash: (equipment: Equipment) => {
    const amountInStash = get().getAmountInStash(equipment)

    if (amountInStash <= 0) return
    const availableEquipment = [...get().availableEquipment]

    const index = availableEquipment.findIndex(
      (value) => value.equipment.name === equipment.name,
    )

    if (index > -1) availableEquipment.splice(index, 1)

    set({
      availableEP: get().availableEP + equipment.cost,
      availableEquipment,
    })
  },

  save: () => {
    useDataslateStore.getState().saveStash({
      availableEP: get().availableEP,
      availableEquipment: get().availableEquipment,
    })

    get().resetStore()
  },
}))

export default useEquipmentShopStore
