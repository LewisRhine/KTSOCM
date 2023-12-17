import { Faction } from '../data/faction.ts'
import { Gear, Weapon } from '../data/equipment.ts'
import {
  blast,
  indirect,
  lethal,
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
  name: 'Choppa',
  description:
    'The operative is equipped with the choppa melee weapon for the battle.',
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

export const slugga: Weapon = {
  id: 0,
  name: 'Slugga',
  description:
    'The operative is equipped with the slugga ranged weapon for the battle.',
  type: 'range',
  cost: 2,
  attacks: 4,
  ballisticsSkills: 4,
  normalDamage: 3,
  criticalDamage: 4,
  rare: false,
  criticalHitRules: [],
  specialRules: [rng('P')],
}

export const harpoon: Weapon = {
  id: 0,
  name: 'Harpoon',
  description:
    'The operative is equipped with the following ranged weapon for the battle.',
  type: 'range',
  cost: 3,
  attacks: 4,
  ballisticsSkills: 4,
  normalDamage: 4,
  criticalDamage: 5,
  rare: false,
  criticalHitRules: [stun],
  specialRules: [rng('C')],
}

export const sledgehammer: Weapon = {
  id: 0,
  name: 'Sledgehammer',
  description:
    'The operative is equipped with the following melee weapon for the battle.',
  type: 'melee',
  cost: 3,
  attacks: 4,
  ballisticsSkills: 4,
  normalDamage: 4,
  criticalDamage: 5,
  rare: false,
  criticalHitRules: [stun],
  specialRules: [],
}

export const stikkbomb: Weapon = {
  id: 0,
  name: 'Stikkbomb',
  description:
    'The operative is equipped with the following ranged weapon for the battle.',
  type: 'range',
  cost: 2,
  attacks: 4,
  ballisticsSkills: 3,
  normalDamage: 2,
  criticalDamage: 4,
  rare: false,
  criticalHitRules: [],
  specialRules: [rng('P'), blast('C'), indirect, limited],
}

export const dynamite: Weapon = {
  id: 0,
  name: 'Dynamite',
  description:
    'The operative is equipped with the following ranged weapon for the battle.',
  type: 'range',
  cost: 4,
  attacks: 4,
  ballisticsSkills: 3,
  normalDamage: 5,
  criticalDamage: 6,
  rare: false,
  criticalHitRules: [],
  specialRules: [
    rng('P'),
    blast('C'),
    armourPenetration(1),
    indirect,
    unwieldy,
    limited,
  ],
}

export const smokeGrenade: Gear = {
  id: 0,
  name: 'Smoke Grenade',
  description: 'The operative can perform the following action for the battle',
  cost: 3,
  ability: `Place the centre of one Smoke token on a point within ${rng(
    'P',
  )} of this operative. That token creates an area of smoke with a ${rng(
    'C',
  )} radius and unlimited upward height (but not below) measured from the centre of that token. Until the end of the Turning Point, an operative is Obscured if every Cover line drawn to it crosses an area of smoke. This operative can only perform this action once, and cannot perform this action if it is within Engagement Range of an enemy operative.`,
  rare: false,
}

export const stunGrenade: Gear = {
  id: 0,
  name: 'Stun Grenade',
  description: 'The operative can perform the following action for the battle',
  cost: 1,
  ability: `Select one point on the battlefield within ${rng(
    'P',
  )} of this operative. Roll one D6 for each operative within ${rng(
    'C',
  )} of that point, subtracting 1 from the result if they are not Visible to this operative. On a 4+, subtract 1 from that operative’s APL. This operative can only perform this action once, and cannot perform this action if it is within Engagement Range of an enemy operative.`,
  rare: false,
}

export const climbingRope: Gear = {
  id: 0,
  name: 'Climbing Rope',
  description: 'The operative gains the following ability for the battle:',
  cost: 1,
  ability: `Each time this operative ascends or descends a terrain feature while climbing, the first vertical distance of up to 3 ${rng(
    'C',
  )} it travels are counted as ${rng('C')} for that climb.
    This operative does not need to be within ${rng(
      'T',
    )} of a physical and climbable part of a terrain feature in order to climb it.
    Each time this operative drops, the intended location can be any vertical distance from the level it occupies.
    Each time this operative drops, it counts any vertical distance it travels as half for that drop.`,
  rare: false,
}

// Rare Equipment
export const aGrudgeDeclared: Gear = {
  id: 0,
  name: '',
  description: '',
  cost: 3,
  ability: '',
  rare: true,
}

//Strategic Assets

export const supplyHold: StrategicAssets = {
  name: '',
  description: '',
  rule: '',
}
