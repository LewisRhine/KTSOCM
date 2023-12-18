import { Faction } from '../data/faction.ts'
import { Gear, Weapon } from '../data/equipment.ts'
import {
  ap,
  balanced,
  blast,
  indirect,
  lethal,
  limited,
  rending,
  rng,
  stun,
} from '../data/specialRules.ts'
import { StrategicAssets } from '../data/strategicAssets.ts'
import { Requisition } from '../data/requisition.ts'

// Equipment
export const quillGrenade: Weapon = {
  id: 0,
  name: 'Quill grenade',
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
  specialRules: [rng('O'), blast('C'), indirect, limited],
}

export const piercingShot: Weapon = {
  id: 0,
  name: 'Piercing shot',
  description:
    'Operative equipped with a Kroot rifle, Kroot pistol or dual Kroot pistols only. The operative is equipped with the following ranged weapon for the battle (its BS characteristic is the same as the Kroot rifle or Kroot pistol the operative is equipped with):',
  cost: 2,
  type: 'range',
  attacks: 4,
  ballisticsSkills: 0,
  normalDamage: 3,
  criticalDamage: 4,
  rare: false,
  criticalHitRules: [],
  specialRules: [ap(1), limited],
  specialRule:
    'Unless the operative is equipped with a Kroot rifle, this ranged weapon has the Rng 6" special rule.',
}

export const toxinShot: Weapon = {
  id: 0,
  name: 'Toxin shot',
  description:
    'Operative equipped with a Kroot rifle, Kroot pistol or dual Kroot pistols only. The operative is equipped with the following ranged weapon for the battle (its BS characteristic is the same as the Kroot rifle or Kroot pistol the operative is equipped with):',
  cost: 2,
  type: 'range',
  attacks: 4,
  ballisticsSkills: 0,
  normalDamage: 2,
  criticalDamage: 2,
  rare: false,
  criticalHitRules: [stun],
  specialRules: [lethal(5), limited],
  specialRule:
    'Unless the operative is equipped with a Kroot rifle, this ranged weapon has the Rng 6" special rule.',
}

export const meat: Gear = {
  id: 0,
  name: 'Meat',
  description: 'The operative gains the following ability for the battle:',
  cost: 1,
  ability:
    'Once during the battle, when this operative is activated, you can use this ability. If you do so, this operative regains D3+1 lost wounds.',
  rare: false,
}

export const trophy: Gear = {
  id: 0,
  name: 'Trophy',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'Once during the battle, when this operative is activated, you can use this ability. If you do so, add 1 to this operative’s APL. Each Turning Point, only one friendly operative can use this ability.',
  rare: false,
}

export const ritualBlade: Weapon = {
  id: 0,
  name: 'Ritual blade',
  description:
    'KROOT KILL-BROKER operative only. Instead of its blade, the operative is equipped with the following melee weapon for the battle',
  cost: 2,
  type: 'melee',
  attacks: 3,
  ballisticsSkills: 2,
  normalDamage: 4,
  criticalDamage: 5,
  rare: false,
  criticalHitRules: [],
  specialRules: [],
}
export const krootPistol: Weapon = {
  id: 0,
  name: 'Kroot pistol',
  description:
    'The operative is equipped with the following ranged weapon for the battle:',
  cost: 1,
  type: 'range',
  attacks: 4,
  ballisticsSkills: 4,
  normalDamage: 3,
  criticalDamage: 4,
  rare: false,
  criticalHitRules: [],
  specialRules: [rng('O')],
}

// Rare Equipment
export const kinblade: Weapon = {
  id: 0,
  name: 'Kinblade',
  description:
    'KROOT KILL-BROKER operative only. Instead of its blade, the operative is equipped with the following melee weapon for the battle:',
  cost: 3,
  type: 'melee',
  attacks: 3,
  ballisticsSkills: 2,
  normalDamage: 4,
  criticalDamage: 5,
  rare: true,
  criticalHitRules: [rending],
  specialRules: [balanced],
}

export const knarlocHide: Gear = {
  id: 0,
  name: 'Knarloc Hide',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'Each time an enemy operative fights in combat with or makes a shooting attack against this operative, subtract 1 from both Damage characteristics of weapons that enemy operative is equipped with for that combat or shooting attack (to a minimum of 2).',
  rare: true,
}

export const kroothawkTotem: Gear = {
  id: 0,
  name: 'Kroothawk Totem',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'Once per battle, after rolling off to determine initiative, this operative can use this ability. If it does so, you can re-roll your dice.',
  rare: true,
}

export const ancientFlintlock: Gear = {
  id: 0,
  name: 'Ancient Flintlock',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'Select one Kroot pistol, Kroot rifle, Kroot Scattergun or dual Kroot pistols the operative is equipped with. It gains the Lethal 5+ special rule for the battle.',
  rare: true,
}

export const kinTotem: Gear = {
  id: 0,
  name: 'Kin Totem',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'While a friendly FARSTALKER KINBAND operative is Visible to and within 3" of this operative, it is not treated as being injured (only ignore the modifier to its Movement characteristic as a result of being injured if it is activated within 3" of this operative).',
  rare: true,
}

export const windmark: Gear = {
  id: 0,
  name: 'Windmark',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability: 'Add 1" to this operative’s Movement characteristic for the battle.',
  rare: true,
}

//Strategic Assets

export const spoilsSafe: StrategicAssets = {
  name: 'Spoils Safe',
  description:
    'On their many varied missions, Farstalker Kinbands acquire all manner of resources, equipment and materials that may be of use to the wider kindred and the rest of their species. They keep this secure at all times, and draw upon it when required for battle.',
  rule: 'In the Strategy phase of the first Turning Point, add 1 additional Command point to your pool.',
}

export const weaponWorkbench: StrategicAssets = {
  name: 'Weapon workbench',
  description:
    'Kroot of Farstalker Kinbands spend much time customising their weapons to make them more effective in battle, as well as personalising them with spiritually significant trinkets and tokens.',
  rule: 'While your base of operations has this strategic asset, all ranged weapons rare equipment items from the Kill Team Core Book, are treated as being in your stash. However Kroot pistols, Kroot rifles and Kroot scatterguns are the only ranged weapons that can be upgraded as a result of this. Note that ranged weapons rare equipment items added to your stash in the usual manner do not have this restriction.',
}

export const meatLocker: StrategicAssets = {
  name: 'Meat locker',
  description:
    'Food is of the utmost importance to the Kroot - not just for sustenance but also for the genetic material it contains that might be of great evolutionary value to their kind. As a result, anything they do not consume immediately they store securely.',
  rule: 'Each time a Recovery test is taken for a friendly FARSTALKER KINBAND operative, if it was not incapacitated during that battle, treat it as being Rested for one additional game.',
}

// Requisitions

const negotiate: Requisition = {
  name: 'Negotiate',
  cost: 1,
  description:
    'The Kroot’s leaders have become adept at negotiating employment contracts that yield considerable rewards.',
  rule: 'Purchase this Requisition when you receive a commendation (e.g. for completing all of a Spec Op’s operations). Select one of that commendation’s bullet points, then select a bullet point from a different commendation your kill team could have access to (it cannot be the same reward as another bullet point from your received commendation and it cannot be one in which you gain Requisition points). Gain the rewards of the second selected bullet point instead of the first.',
}

const honourableOffering: Requisition = {
  name: 'Honourable offering',
  cost: 1,
  description:
    'When a Kroot is maimed or dies, Kroot can eat their flesh so that their memories and knowledge are retained for following generations. In desperate times, should a Kroot be so injured or sick that they slow down their kin, their fellows will put them out of their misery and consume their flesh also.',
  rule:
    'Purchase this Requisition when a friendly FARSTALKER KINBAND operative of Veteran rank or higher is removed from your dataslate or gains the Critical Impairment Battle Scar. You can select a number of other friendly FARSTALKER KINBAND operatives on your dataslate up to the number of ranks that operative has/had multiplied by two; each selected operative earns 1XP. For example, if a FARSTALKER KINBAND operative of Veteran rank gains the Critical Impairment Battle Scar, up to four other friendly FARSTALKER KINBAND operatives could each earn 1XP.\n' +
    '\n' +
    'If you purchased this Requisition when a friendly FARSTALKER KINBAND operative gained the Critical Impairment Battle Scar, that Battle Scar can only be removed as a result of a passed Recovery Test result of 6 (a bionic replacement must be sought instead!). Each friendly FARSTALKER KINBAND operative can only provide experience points to other friendly operatives from this Requisition once (if they do so, make a note of it on their narrative datacard).',
}

const debtOwed: Requisition = {
  name: 'Debt owed',
  cost: 1,
  description:
    'The Kroot of Farstalker Kinbands have an extremely close bond. Those who harm one of their number can expect payback, with interest.',
  rule:
    'Purchase this Requisition when a friendly FARSTALKER KINBAND operative fails a Casualty test. Make a note of the Faction keyword of the enemy operative that incapacitated that operative; that faction owes you a debt. Each time you play a game against a faction that owes you a debt, you gain the following benefit for the battle: the Balanced special rule allows you to re-roll up to two of your attack dice (instead of one) during that game.\n' +
    '\n' +
    'If you win a game against a faction that owes you a debt, the debt is no longer owed to you and the benefit ends. Alternatively, after the battle, after taking Casualty tests in the Update Dataslates step, you can choose for the debt to be no longer owed to you, in which case the benefit ends and all operatives that did not fail an Out of Action test suffer the Cerebral Affliction Battle Scar. You can only have one debt owed to you at once.',
}

export const farstalkerKinband: Faction = {
  id: 1,
  name: 'Farstalker Kinband',
  keyword: 'FARSTALKER KINBAND',
  historyTable: [
    'Shadow Fighters: These warriors seek out hidden positions from which to strike.',
    'Endurance Hunters: These Kroot outlast their foes, ginding them down slowly but surely.',
    'Go for the Throat: These Kroot identify important enemy fighters and destroy them as soon as possible.',
    'Encircles: By surrounding their enemies, these fighters or off any possible route of escape',
    'Only the Strong Survive: These hardened Kroot are highly, pragmatic, and will quickly choose to eat their injured kin.',
    'Shock Troops: These Kibot are used for heavy Aging, and put their battlefeld experience to deadly use.',
  ],
  quirkTable: [
    'Shadow Fighters: These warriors seek out hidden positions from which to strike.',
    'Endurance Hunters: These Kroot outlast their foes, ginding them down slowly but surely.',
    'Go for the Throat: These Kroot identify important enemy fighters and destroy them as soon as possible.',
    'Encircles: By surrounding their enemies, these fighters or off any possible route of escape',
    'Only the Strong Survive: These hardened Kroot are highly, pragmatic, and will quickly choose to eat their injured kin.',
    'Shock Troops: These Kibot are used for heavy Aging, and put their battlefeld experience to deadly use.',
  ],
  coverImage: 'https://wh40k.lexicanum.com/mediawiki/images/b/b6/KrootArt1.jpg',
  equipment: [
    quillGrenade,
    piercingShot,
    toxinShot,
    meat,
    trophy,
    ritualBlade,
    krootPistol,
  ],
  rareEquipment: [
    kinblade,
    knarlocHide,
    kroothawkTotem,
    ancientFlintlock,
    kinTotem,
    windmark,
  ],
  strategicAssets: [spoilsSafe, weaponWorkbench, meatLocker],
  requisitions: [negotiate, honourableOffering, debtOwed],
  specOps: [],
}
