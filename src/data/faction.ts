import { Equipment } from './equipment.ts'
import { Requisition } from './requisition.ts'
import { hearthkynSalvager } from '../factions/hearthkynSalvager.ts'
import { farstalkerKinband } from '../factions/farstalkerKinband.ts'
import { StrategicAssets } from './strategicAssets.ts'
import { SpecOps } from './specOps.ts'

export interface Faction {
  id: number
  name: string
  keyword: string
  historyTable: string[]
  quirkTable: string[]
  equipment: Equipment[]
  rareEquipment: Equipment[]
  requisitions: Requisition[]
  specOps: SpecOps[]
  coverImage?: string
  strategicAssets?: StrategicAssets[]
}

export const factions: Array<Faction> = [farstalkerKinband, hearthkynSalvager]
