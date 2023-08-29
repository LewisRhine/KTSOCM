import { SpecialRules } from "./specialRules.ts";

export interface Equipment {
  id: number;
  name: string;
  cost: number;
  description: string;
  rare: boolean;
}

export interface Gear extends Equipment {
  ability: string;
}

export interface Weapon extends Equipment {
  type: "melee | range";
  attacks: number;
  ballisticsSkills: number;
  normalDamage: number;
  criticalDamage: number;
  specialRules: SpecialRules[];
}