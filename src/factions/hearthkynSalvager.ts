import { Faction } from '../data/faction.ts'
import { Gear, Weapon } from '../data/equipment.ts'
import { blast, indirect, lethal, limited, rng } from '../data/specialRules.ts'
import { StrategicAssets } from '../data/strategicAssets.ts'

// Equipment
export const graviticConcussionGrenade: Weapon = {
  id: 0,
  name: 'Gravitic concussion grenade',
  description:
    'The operative is equipped with the following ranged weapon for the battle:',
  type: 'range',
  cost: 2,
  attacks: 4,
  ballisticsSkills: 3,
  normalDamage: 2,
  criticalDamage: 4,
  rare: false,
  criticalHitRules: [],
  specialRules: [rng('O'), blast('C'), indirect, limited],
}

export const plasmaKnife: Weapon = {
  id: 0,
  name: 'Plasma knife',
  description:
    'The operative is equipped with the following melee weapon for the battle:',
  cost: 2,
  type: 'melee',
  attacks: 4,
  ballisticsSkills: 4,
  normalDamage: 3,
  criticalDamage: 5,
  rare: false,
  criticalHitRules: [],
  specialRules: [lethal(5)],
}

export const climbingEquipment: Gear = {
  id: 0,
  name: 'Climbing Equipment',
  description: 'The operative gains the following ability for the battle:',
  cost: 1,
  ability:
    'Each time this operative ascends or descends a terrain feature while climbing, the first vertical distance of up to 3 it travels are counted as  for that climb.\n' +
    'This operative does not need to be within  of a physical and climbable part of a terrain feature in order to climb it. Each time this operative drops, the intended location can be any vertical distance from the level it occupies.\n' +
    'Each time this operative drops, it counts any vertical distance it travels as half for that drop.',
  rare: false,
}

export const weavefieldCrest: Gear = {
  id: 0,
  name: 'Weavefield Crest',
  description:
    'THEYN operative only. The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'While a friendly HEARTHKYN SALVAGER operative is within  of this operative, that operative has a 4+ invulnerable save.',
  rare: false,
}

export const excavationTool: Gear = {
  id: 0,
  name: 'Excavation Tool',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'At the end of the Set Up Barricades step, place one of your Clearance tokens within  of a part of a terrain feature with the Traversable trait and more than  from your opponent’s drop zone. Until the end of the battle, friendly operatives do not have to traverse that terrain feature; they can move through it as if it were not there, so long as they do so within  of that token. Note that they cannot finish the move on that terrain feature. You can select this item of equipment no more than three times for the battle.',
  rare: false,
}

export const autoCalibrator: Gear = {
  id: 0,
  name: 'Auto-Calibrator',
  description:
    'Select one of the operative’s ranged weapons. Each time the operative makes a shooting attack with that weapon during the battle, you can ignore any or all modifiers to its Ballistic Skill characteristic.',
  cost: 1,
  ability: '',
  rare: false,
}

// Rare Equipment
export const aGrudgeDeclared: Gear = {
  id: 0,
  name: 'A Grudge Declared',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'Once during the battle, in the Strategy phase, when it’s your turn to use a Strategic Ploy or pass, you can instead select one enemy operative to gain a Grudge token.',
  rare: true,
}

export const darkstarWeapon: Gear = {
  id: 0,
  name: 'Darkstar Weapon',
  description:
    'Select one of the operative’s melee weapons. Until the end of the battle, that weapon gains the Rending critical hit rule.',
  cost: 2,
  ability: '',
  rare: true,
}

export const relicPlate: Gear = {
  id: 0,
  name: 'Relic Plate',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'Each time a shooting attack is made against this operative, in the Roll Defence Dice step of that shooting attack, you can re-roll one of your defence dice.',
  rare: true,
}

export const rightOfClaim: Gear = {
  id: 0,
  name: 'Right of Claim',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'While this operative is within  of an objective marker, add 1 to its Defence characteristic.',
  rare: true,
}

export const gravLiftDevice: Gear = {
  id: 0,
  name: 'Grav-lift Device',
  description:
    'The operative can perform the following action once during the battle:',
  cost: 2,
  ap: 1,
  ability:
    'Place a Grav-wave token within  of this operative. Until the end of the battle, each time a friendly HEARTHKYN SALVAGER operative moves within  of that token, it gains the FLY keyword until the end of its activation.',
  rare: true,
}

export const ionExpediter: Gear = {
  id: 0,
  name: 'Ion Expediter',
  description:
    'Select one ion blaster or ion pistol the operative is equipped with. Add 1 to both of its Damage characteristics for the battle.',
  cost: 2,
  ability: '',
  rare: true,
}

//Strategic Assets

export const supplyHold: StrategicAssets = {
  name: 'Supply Hold',
  description:
    'The Kin expect to recover a great deal of technology and resources on their missions, and so have established a sizeable supply hold to secure all of it.',
  rule: 'While your base of operations has this strategic asset, double the quantities of HEARTHKYN SALVAGER equipment in your stash.',
}

export const hearthkynSalvager: Faction = {
  id: 2,
  name: 'Hearthkyn Salvager',
  keyword: 'HEARTHKYN SALVAGER',
  coverImage: 'https://wh40k.lexicanum.com/mediawiki/images/8/82/LOVCover.jpg',
  historyTable: [],
  quirkTable: [],
  equipment: [
    graviticConcussionGrenade,
    plasmaKnife,
    climbingEquipment,
    weavefieldCrest,
    excavationTool,
    autoCalibrator,
  ],
  rareEquipment: [
    aGrudgeDeclared,
    darkstarWeapon,
    relicPlate,
    rightOfClaim,
    gravLiftDevice,
    ionExpediter,
  ],
  strategicAssets: [supplyHold],
}
