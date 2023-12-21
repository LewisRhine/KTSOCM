import { Faction } from '../data/faction.ts'
import { Gear, Weapon } from '../data/equipment.ts'
import { blast, indirect, limited, rng, ap } from '../data/specialRules.ts'
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
  specialRules: [rng('P'), indirect, limited, ap(1)],
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
export const brandsOfTheDamned: Gear = {
  id: 0,
  name: 'Brands Of The Damned',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'Brands of the Damned: Once per battle, if this operative is in the killzone, you can use a Tactical Ploy without spending any CPs; that Tactical Ploy must have the same MARK OF CHAOS selectable keyword as this operative. For example, if this operative has the SLAANESH keyword, you can use the Sickening Captivation Tactical Ploy. If this operative has the UNDIVIDED keyword, you can use the Veteran of the Long War or Command Re-roll Tactical Ploys instead.',
  rare: true,
}

export const gauntletsOfVengeance: Gear = {
  id: 0,
  name: 'Gauntlets Of Vengeance',
  description:
    'Operative equipped with fists only. The fists the operative is equipped with gain the following improvements for the battle:',
  cost: 2,
  ability:
    'It gains the Relentless special rule and the Rending critical hit rule.' +
    '/n' +
    'Add 1 to its Attacks characteristic.',
  rare: true,
}

export const pagesOfScabrius: Gear = {
  id: 0,
  name: 'Pages Of Scabrius',
  description: 'LEGIONARY BALEFIRE ACOLYTE operative only. ',
  cost: 2,
  ability:
    'This operative can perform the Manifest Psychic Power action twice during its activation.',
  rare: true,
}

export const iconOfChaos: Gear = {
  id: 0,
  name: 'Icon Of Chaos',
  description:
    'LEGIONARY ICON BEARER operative only. The operative gains the following ability for the battle:',
  cost: 4,
  ability:
    'con of Chaos: While this operative is in the killzone, friendly LEGIONARY operatives cannot be injured.',
  rare: true,
}

export const daemonAxe: Gear = {
  id: 0,
  name: 'Daemon Axe',
  description: 'LEGIONARY BUTCHER operative only.',
  cost: 3,
  ability:
    'characteristic of the double-handed chain axe the operative is equipped with for the battle.',
  rare: true,
}

export const relicBoltPistol: Gear = {
  id: 0,
  name: 'Relic Bolt Pistol',
  description:
    'Operative equipped with bolt pistol or tainted bolt pistol only. The bolt pistol or tainted bolt pistol the operative is equipped with gains the following improvements for the battle:',
  cost: 2,
  ability:
    'Add 1 to its Attacks characteristic.' +
    '/n' +
    'It gains the Relentless special rule.',
  rare: true,
}

//Strategic Assets

export const uncleanShrine: StrategicAssets = {
  name: 'Unclean Shrine',
  description:
    'After battle, the kill team presents offerings to the gods at their shrine. Only those who have claimed the most heads gain their favour.',
  rule: 'In the Update Experience step of a mission sequence, the friendly operative that incapacitated the most enemy operatives gains 1XP (if more than one operative is tied for the number of most enemy operatives incapacitated, randomly select one of them to gain the XP). You can only add this strategic asset to your base of operations if your dataslate includes at least one operative of Ace rank or higher.',
}

export const relicsOfTheHeresy: StrategicAssets = {
  name: 'Relics Of The Heresy',
  description:
    'The kill team holds in its possession relics dating back to the days of the Horus Heresy.',
  rule: 'When this strategic asset is added to your base of operations, add two items of rare equipment to your stash. If this strategic asset is removed from your base of operations, remove those items of rare equipment from your stash.',
}

export const sacrificialAltar: StrategicAssets = {
  name: 'Sacrificial Altar',
  description:
    'Before battle, the kill team sacrifices victims to the Dark Gods at this sacrificial altar.',
  rule: 'Once per battle, in the Resolve Successful Hits step of a combat or shooting attack, you can ignore the damage inflicted on a friendly LEGIONARY operative from one attack dice.',
}

//REQUISITIONS

export const markedForGreatness: Requisition = {
  name: 'Marked For Greatness',
  cost: 1,
  description:
    'Some warriors earn the favour of the gods thanks to their murderous deeds.',
  rule:
    'Purchase this Requisition before or after a game, if your dataslate includes an operative of Ace rank or higher. The operative on your dataslate with the most XP gains the following ability:' +
    '/n' +
    'Marked For Greatness: Once per battle, when this operative fights in combat or makes a shooting attack, in the Roll Attack Dice step of that combat or shooting attack, if you cannot retain any critical hits, you can select one of your normal hits to be retained as a critical hit instead. After each battle, if another operative on your dataslate has more XP than this operative, this operative loses this ability. Note that other operative does not gain this ability, instead you must purchase this Requisition again.',
}

export const eyeOfTheGods: Requisition = {
  name: 'Eye Of The Gods',
  cost: 1,
  description: `Slaughtering an enemy commander is a sure way to receive the gods' attention.`,
  rule: 'Purchase this Requisition after a game in which the enemy LEADER operative was incapacitated by a friendly LEGIONARY operative. That friendly operative has all Battle Scars removed (if any) and gains D3 XP. You can only use this Requisition once after each game.',
}

export const castAside: Requisition = {
  name: 'Cast Aside',
  cost: 1,
  description: `It takes little to earn the gods' ire, or to drive them to boredom.`,
  rule: 'Purchase this Requisition in the Update Dataslates step of a mission sequence, before rolling to determine a Battle Scar for a friendly LEGIONARY operative. Instead of suffering a Battle Scar, for the next D3 battles this operative is in your kill team, it loses the relevant ability related to its MARK OF CHAOS keyword (e.g. a NURGLE operative would lose the Disgusting Vigour ability).',
}

export const legionary: Faction = {
  id: 4,
  name: 'Legionary',
  keyword: 'LEGIONARY',
  coverImage: 'https://ktdash.app/img/portraits/CHAOS/LEG/LEG/ANO.jpg',
  historyTable: [],
  quirkTable: [],
  equipment: [
    aggressionStimulants,
    wardedArmour,
    suspensorSystem,
    malignScripture,
    taintedRounds,
    grislyTrophy,
    fragGrenade,
    krakGrenade,
    maleficBlade,
  ],
  rareEquipment: [
    brandsOfTheDamned,
    gauntletsOfVengeance,
    pagesOfScabrius,
    iconOfChaos,
    daemonAxe,
    relicBoltPistol,
  ],
  strategicAssets: [uncleanShrine, relicsOfTheHeresy, sacrificialAltar],
  requisitions: [markedForGreatness, eyeOfTheGods, castAside],
  specOps: [],
}
