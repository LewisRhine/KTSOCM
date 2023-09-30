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
