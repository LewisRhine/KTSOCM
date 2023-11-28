import { SpecialRules } from './specialRules.ts'

export interface Equipment {
  id: number
  name: string
  cost: number
  description: string
  rare: boolean
}

export interface Gear extends Equipment {
  ability: string
  ap?: number
}

export interface Weapon extends Equipment {
  type: 'melee' | 'range'
  attacks: number
  ballisticsSkills: number
  normalDamage: number
  criticalDamage: number
  criticalHitRules: SpecialRules[]
  specialRules: SpecialRules[]
}

export const isWeapon = (equipment: Equipment): equipment is Weapon => {
  return (equipment as Weapon).attacks !== undefined
}

export const isGear = (equipment: Equipment): equipment is Gear => {
  return (equipment as Gear).ability !== undefined
}

// Generic Rare Equipment
const autoLoader: Gear = {
  id: 0,
  name: 'Auto-loader',
  cost: 2,
  description: '',
  rare: true,
  ability: 'This weapon gains the Ceaseless special rule.',
}

const fluxCapacitor: Gear = {
  id: 0,
  name: 'Flux Capacitor',
  cost: 2,
  description: '',
  rare: true,
  ability: 'This weapon gains the P1 critical hit rule.',
}

const rendingRounds: Gear = {
  id: 0,
  name: 'Rending Rounds',
  cost: 2,
  description: '',
  rare: true,
  ability: 'This weapon gains the Rending special rule.',
}

const propulsionAmplifier: Gear = {
  id: 0,
  name: 'Propulsion Amplifier',
  cost: 2,
  description: '',
  rare: true,
  ability: 'Add 1 to both Damage characteristics of this weapon.',
}

const thermalSight: Gear = {
  id: 0,
  name: 'Thermal Sight',
  cost: 2,
  description: '',
  rare: true,
  ability: 'This weapon gains the No Cover special rule.',
}

const seekerSpirit: Gear = {
  id: 0,
  name: 'Seeker Spirit',
  cost: 2,
  description: '',
  rare: true,
  ability:
    'Each time a friendly operative makes a shooting attack with this weapon, in the Roll Attack Dice step of that shooting attack, for each critical hit you retain, you can re-roll one of your attack dice.',
}
/////
const powerEnhancer: Gear = {
  id: 0,
  name: 'Power Enhancer',
  cost: 2,
  description: '',
  rare: true,
  ability: 'Add 1 to both Damage characteristics of this weapon.',
}

const inertiaDisplacer: Gear = {
  id: 0,
  name: 'Inertia Displacer',
  cost: 2,
  description: '',
  rare: true,
  ability: 'This weapon gains the Brutal special rule.',
}

const perfectlyWeighted: Gear = {
  id: 0,
  name: 'Perfectly Weighted',
  cost: 2,
  description: '',
  rare: true,
  ability: 'This weapon gains the Balanced special rule.',
}

const rendingBlade: Gear = {
  id: 0,
  name: 'Rending Blade',
  cost: 2,
  description: '',
  rare: true,
  ability: 'This weapon gains the Rending special rule.',
}

const monomolecularEdge: Gear = {
  id: 0,
  name: 'Monomolecular Edge',
  cost: 2,
  description: '',
  rare: true,
  ability: 'This weapon gains the Lethal 5+ special rule.',
}

const arcUnit: Gear = {
  id: 0,
  name: 'Arc Unit',
  cost: 2,
  description: '',
  rare: true,
  ability: 'This weapon gains the Stun critical hit rule.',
}

export const genericRangeRareEquipment: Equipment[] = [
  autoLoader,
  fluxCapacitor,
  rendingRounds,
  propulsionAmplifier,
  thermalSight,
  seekerSpirit,
]

export const genericMeleeRareEquipment: Equipment[] = [
  powerEnhancer,
  inertiaDisplacer,
  perfectlyWeighted,
  rendingBlade,
  monomolecularEdge,
  arcUnit,
]
