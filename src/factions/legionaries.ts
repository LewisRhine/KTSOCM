import { Faction } from '../data/faction.ts'
import { Gear, Weapon } from '../data/equipment.ts'
import {
  blast,
  indirect,
  limited,
  rng,
  stun,
  armourPenetration,
  unwieldy,
} from '../data/specialRules.ts'
import { StrategicAssets } from '../data/strategicAssets.ts'
import { Requisition } from '../data/requisition.ts'

// Equipment

export const choppa: Weapon = {
    id: 0,
    name: '',
    description:
      '',
    type: 'melee',
    cost: 2,
    attacks: 4,
    ballisticsSkills: 3,
    normalDamage: 4,
    criticalDamage: 5,
    rare: false,
    criticalHitRules: [],
    specialRules: [],
  }

  export const smokeGrenade: Gear = {
    id: 0,
    name: '',
    description: '',
    cost: 3,
    ability:
      '',
    rare: false,
  }
  
  // Rare Equipment
export const shinySlugz: Gear = {
    id: 0,
    name: '',
    description: '',
    cost: 2,
    ability:
      '',
    rare: true,
  }

  //Strategic Assets

export const territorialGlyphs: StrategicAssets = {
    name: '',
    description:
      '',
    rule:
      '',
  }
  
//REQUISITIONS

export const orkyConstitution: Requisition = {
    name: '',
    cost: 1,
    description:
      '',
    rule: '',
  }
  
  

export const legionariesando: Faction = {
  id: 3,
  name: 'Kommando',
  keyword: 'KOMMANDO',
  coverImage:'',
  historyTable: [],
  quirkTable: [],
  equipment: [],
  rareEquipment: [
  ],
  strategicAssets: [],
  requisitions: [],
  specOps: [],
}
