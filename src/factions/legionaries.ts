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
export const aggressionStimulants: Gear = {
  id: 0,
  name: 'Aggression Stimulants',
  description: 'The operative gains the following ability for the battle',
  cost: 3,
  ability:
    'Aggression Stimulants: Each time this operative fights in combat, in the Roll Attack Dice step of that combat, if this operative performed a Charge action during this Turning Point, you can re-roll one of your attack dice.',
  rare: false,
}

export const wardedArmour: Gear = {
  id: 0,
  name: 'Warded Armour',
  description: '',
  cost: 3,
  ability:
    'Change the operative’s Save characteristic to 2+ for the battle. In the Resolve Successful Hits step of a combat or shooting attack, if an attack dice inflicts damage on this operative, its Save characteristic is changed back to its normal characteristic for the rest of the battle.',
  rare: false,
}

export const suspensorSystem: Gear = {
  id: 0,
  name: 'Suspensor System',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'Suspensor System: The Heavy special rule of ranged weapons the operative is equipped with is treated differently. Instead, an operative cannot move more than 3, 2" in the same activation in which it performs a Shoot action with any of those ranged weapons.',
  rare: false,
}

export const malignScripture: Gear = {
  id: 0,
  name: 'Malign Scripture',
  description:
    'LEGIONARY BALEFIRE ACOLYTE operative only. The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'Malign Scripture: Once per battle, this operative can perform two' +
    '/n' +
    'Manifest Psychic Power actions during its activation.',
  rare: false,
}

export const taintedRounds: Gear = {
  id: 0,
  name: 'Tainted Rounds',
  description: '',
  cost: 3,
  ability:
    'Select one boltgun, bolt pistol or tainted bolt pistol the operative is equipped with. Add 1 to both Damage characteristics of that weapon.',
  rare: false,
}

export const grislyTrophy: Gear = {
  id: 0,
  name: 'Grisly Trophy',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'While this operative is Visible to and within  of an enemy operative, subtract 1 from the Attacks characteristic of ranged and melee weapons that enemy operative is equipped with.',
  rare: false,
}

export const fragGrenade: Weapon = {
  id: 0,
  name: 'Frag Grenade',
  description:
    'The operative is equipped with the following ranged weapon for the battle:',
  type: 'range',
  cost: 2,
  attacks: 4,
  ballisticsSkills: 3,
  normalDamage: 2,
  criticalDamage: 3,
  rare: false,
  criticalHitRules: [],
  specialRules: [rng('P'), blast('C'), indirect, limited],
}

export const krakGrenade: Weapon = {
  id: 0,
  name: 'Krak Grenade',
  description:
    'The operative is equipped with the following ranged weapon for the battle. It cannot make a shooting attack with this weapon by performing an Overwatch action:',
  type: 'range',
  cost: 3,
  attacks: 4,
  ballisticsSkills: 3,
  normalDamage: 4,
  criticalDamage: 5,
  rare: false,
  criticalHitRules: [],
  specialRules: [rng('P'), indirect, limited, armourPenetration(1)],
}

export const maleficBlade: Weapon = {
  id: 0,
  name: 'Malefic Blade',
  description:
    'The operative is equipped with the following melee weapon for the battle:',
  type: 'melee',
  cost: 2,
  attacks: 5,
  ballisticsSkills: 3,
  normalDamage: 3,
  criticalDamage: 5,
  rare: false,
  criticalHitRules: [],
  specialRules: [],
}

// Rare Equipment
export const shinySlugz: Gear = {
  id: 0,
  name: '',
  description: '',
  cost: 2,
  ability: '',
  rare: true,
}

//Strategic Assets

export const territorialGlyphs: StrategicAssets = {
  name: '',
  description: '',
  rule: '',
}

//REQUISITIONS

export const orkyConstitution: Requisition = {
  name: '',
  cost: 1,
  description: '',
  rule: '',
}

export const legionariesando: Faction = {
  id: 3,
  name: 'Kommando',
  keyword: 'KOMMANDO',
  coverImage: '',
  historyTable: [],
  quirkTable: [],
  equipment: [],
  rareEquipment: [],
  strategicAssets: [],
  requisitions: [],
  specOps: [],
}
