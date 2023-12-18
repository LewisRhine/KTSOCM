type Measurement = '1"' | '2"' | '3"' | '6"'

export interface SpecialRules {
  name: string
  rule: string
}

export const ceaseless: SpecialRules = {
  name: 'Ceaseless',
  rule: 'Each time a friendly operative fights in combat or makes a shooting attack with this weapon, in the Roll Attack Dice step of that combat or shooting attack, you can re-roll any or all of your attack dice results of 1.',
}

export const indirect: SpecialRules = {
  name: 'Indirect',
  rule: 'Each time a friendly operative makes a shooting attack with this weapon, in the select valid target step of that shooting attack, enemy operatives are not in Cover.',
}

export const limited: SpecialRules = {
  name: 'Limited',
  rule: 'This weapon can only be selected for use once per battle. If the weapon has a special rule that would allow it to make more than one shooting attack for an action (e.g. Blast), make each of those attacks as normal.',
}

export const rng = (x: Measurement): SpecialRules => ({
  name: `Ran ${x}`,
  rule: `Range. Each time a friendly operative makes a shooting attack with this weapon, only operatives within ${x} are a valid target, ${x} is the distance after the weapon’s Rng, e.g. Rng . All other rules for selecting a valid target still apply.`,
})

export const blast = (x: Measurement): SpecialRules => ({
  name: `Blast ${x}`,
  rule: `Each time a friendly operative performs a Shoot action and selects this weapon (or, in the case of profiles, this weapon’s profile), after making the shooting attack against the target, make a shooting attack with this weapon (using the same profile) against each other operative Visible to and within ${x} of the original target – each of them is a valid target and cannot be in Cover. ${x} is the distance after the weapon’s Blast, e.g. Blast . An operative cannot make a shooting attack with this weapon by performing an Overwatch action.`,
})

export const lethal = (x: number): SpecialRules => ({
  name: `Lethal ${x}+`,
  rule: `Each time a friendly operative fights in combat or makes a shooting attack with this weapon, in the Roll Attack Dice step of that combat or shooting attack, your attack dice results of equal to or greater than ${x}+ that are successful hits are critical hits.`,
})
