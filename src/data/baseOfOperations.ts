import { Equipment } from './equipment.ts'
import { StrategicAssets } from './strategicAssets.ts'


export interface AvailableEquipment {
  isEquipped: boolean
  equipment: Equipment
}
export interface Stash {
  availableEP: number
  availableEquipment: AvailableEquipment[]
}

export interface BaseOfOperations {
  id: number
  name: string
  description?: string
  stash: Stash
  strategicAssets: StrategicAssets[]
  assetCapacity: number
  userId: string
}
