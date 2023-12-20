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
  ability:
    'Place the centre of one Smoke token on a point within 6" of this operative. That token creates an area of smoke with a 2" radius and unlimited upward height (but not below) measured from the centre of that token. Until the end of the Turning Point, an operative is Obscured if every Cover line drawn to it crosses an area of smoke. This operative can only perform this action once, and cannot perform this action if it is within Engagement Range of an enemy operative.',
  rare: false,
}

export const stunGrenade: Gear = {
  id: 0,
  name: 'Stun Grenade',
  description: 'The operative can perform the following action for the battle',
  cost: 1,
  ability:
    'Select one point on the battlefield within 6" of this operative. Roll one D6 for each operative within 2" of that point, subtracting 1 from the result if they are not Visible to this operative. On a 4+, subtract 1 from that operative’s APL. This operative can only perform this action once, and cannot perform this action if it is within Engagement Range of an enemy operative.',
  rare: false,
}

export const climbingRope: Gear = {
  id: 0,
  name: 'Climbing Rope',
  description: 'The operative gains the following ability for the battle:',
  cost: 1,
  ability:
    'Each time this operative ascends or descends a terrain feature while climbing, the first vertical distance of up to 3, 2" it travels are counted as 2" for that climb.' +
    '/n' +
    'This operative does not need to be within 1" of a physical and climbable part of a terrain feature in order to climb it.' +
    '/n' +
    'Each time this operative drops, the intended location can be any vertical distance from the level it occupies.' +
    '/n' +
    'Each time this operative drops, it counts any vertical distance it travels as half for that drop.',
  rare: false,
}

// Rare Equipment
export const shinySlugz: Gear = {
  id: 0,
  name: 'Shiny Slugz',
  description: '',
  cost: 2,
  ability:
    'Select a slugga, dakka shoota or scoped big shoota the operative is equipped with. That weapon gains the AP1 special rule for the battle. If you selected a slugga, this rare equipment costs 2EP; otherwise, it costs 3EP.',
  rare: true,
}

export const worksEyeball: Gear = {
  id: 0,
  name: 'Work’S Eyeball',
  description: '',
  cost: 1,
  ability:
    'Select a slugga, dakka shoota, scoped big shoota or rokkit launcha the operative is equipped with. Improve the Ballistic Skill characteristic of that weapon by 1 for the battle. If you selected a slugga, that weapon loses the 6" special rule for the battle and this rare equipment costs 1EP; otherwise, it costs 3EP.',
  rare: true,
}
export const devilsWhispa: Gear = {
  id: 0,
  name: `Devil'S Whispa`,
  description: '',
  cost: 2,
  ability:
    'A slugga the operative is equipped with gains the following improvements for the battle:' +
    '/n' +
    'Lethal 4+ special rule' +
    '/n' +
    'Silent special rule',
  rare: true,
}

export const skragasChoppa: Gear = {
  id: 0,
  name: 'Skraga’S Choppa',
  description: '',
  cost: 2,
  ability:
    'A choppa, big choppa or twin choppas the operative is equipped with gains the Lethal 5+ special rule for the battle.',
  rare: true,
}

export const fungalbrew: Gear = {
  id: 0,
  name: 'Fungal Brew',
  description: '',
  cost: 2,
  ability:
    'The operative gains the following abilities for the battle:' +
    '/n' +
    'Before the battle, remove one Battle Scar the operative has.' +
    '/n' +
    'During the battle, the operative cannot be injured.' +
    '/n' +
    'After the battle, the operative passes its Casualty test.',
  rare: true,
}

export const kleverKap: Gear = {
  id: 0,
  name: 'Klever Kap',
  description: '',
  cost: 2,
  ability: 'Gain 1CP for the battle.',
  rare: true,
}

//Strategic Assets

export const territorialGlyphs: StrategicAssets = {
  name: 'Territorial Glyphs',
  description:
    'The Orks mark their territory and honour Gork and Mork with crude glyphs, splatters of paint and battlefield trophies.',
  rule:
    'At the start of the Set Up Operatives step of the mission sequence, you can place a Glyph Token within 6" of your drop zone. If both players have this asset, the Attacker sets up their token first.' +
    '/n' +
    'Unless they are being set up wholly within their drop zone, enemy operatives cannot be set up within 6" of that token.' +
    '/n' +
    'While a friendly KOMMANDO operative is within 6" of that token, each time it fights in a combat in the Roll Attack Dice step of that combat, you can re-roll one of your attack dice.',
}

export const lootHoard: StrategicAssets = {
  name: 'Loot Hoard',
  description: `The Orks of this kill team have piled their bases high with loot they've taken from all manner of battlefields. This gives them great advantage when going to war, as they can take the weapon best suited for the mission - which is very often the biggest they can grab.`,
  rule:
    'In the Select Equipment step of each mission sequence, select one of the following:' +
    '/n' +
    'During this battle, friendly KOMMANDO operatives can perform Stun Grenade and Smoke Grenade actions twice, rather than once.' +
    '/n' +
    'During this battle, stikkbombs and dynamite that friendly KOMMANDO operatives are equipped with can be selected for use twice as a result of the Limited special rule, instead of only once.' +
    '/n' +
    'For this game, you can equip friendly KOMMANDO operatives with sluggas and choppas for 1EP, rather than 2EP.',
}

export const explosivesStash: StrategicAssets = {
  name: 'Explosives Stash',
  description:
    'To Orks, explosions are as enjoyable as they are effective. The kill team has a vast collection of explosives in its base of operations and goes on every mission laden with them.' +
    '/n' +
    'Friendly KOMMANDO operatives (excluding BOMB SQUIG operatives) can perform the following action:',
  rule:
    'LAY EXPLOSIVES 2AP' +
    '/n' +
    'An operative can perform this action while within 1" of a terrain feature that includes any parts with the Heavy trait. An operative cannot perform this action if it is Visible to and within 2" of an enemy operative.' +
    '/n' +
    'Each time a friendly operative performs a Blow It Up!, Sabotage or Lay Explosives action, that terrain feature has been wrecked. While a terrain feature is wrecked, any parts of that terrain feature with the Heavy trait are treated as Light terrain instead.',
}

//REQUISITIONS

export const orkyConstitution: Requisition = {
  name: 'Orky Constitution',
  cost: 1,
  description:
    'Orks are remarkably tough, capable of shrugging off most wounds.',
  rule: 'Purchase this Requisition after taking a Casualty test, Recovery test, or determining a Battle Scar for a friendly KOMMANDO operative. You can re-roll that test, or roll again when determining that Battle Scar.',
}

export const grabDaLoot: Requisition = {
  name: 'Grab Da Loot,',
  cost: 0,
  description:
    'Many Orks pick battlefields clean of anything they perceive to be valuable, whether that be weapons, armour or anything shiny that catches their eye.',
  rule: 'Purchase this Requisition after a game in which you scored maximum victory points from the mission objectives. Gain D3 RPs. You can only use this Requisition once after each battle.',
}

export const fearsomeReputation: Requisition = {
  name: 'Fearsome Reputation',
  cost: 1,
  description:
    'Orks are brutal creatures who thrive on violence. For them might makes right, and Orks who can kill a lot of enemies swiftly earn a reputation amongst their tribes.',
  rule: 'Purchase this Requisition in the Update Dataslates step of the mission sequence, when updating experience for a friendly KOMMANDO operative. If that operative incapacitated three or more enemy operatives during the battle, or incapacitated two or more enemy operatives including an enemy LEADER in the battle, it gains 3 XP. This is not affected by a passed Casualty test. You can only use this Requisition once after each battle.',
}

export const kommando: Faction = {
  id: 3,
  name: 'Kommando',
  keyword: 'KOMMANDO',
  coverImage:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb258159-c3ff-4d5b-b866-7373bf1b9a0a/d7lso9v-26decdc9-9eae-4173-96bc-b80d7b3c261b.jpg/v1/fill/w_997,h_802,q_70,strp/ork_kommando_s_by_musibat_khan_d7lso9v-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzMCIsInBhdGgiOiJcL2ZcL2JiMjU4MTU5LWMzZmYtNGQ1Yi1iODY2LTczNzNiZjFiOWEwYVwvZDdsc285di0yNmRlY2RjOS05ZWFlLTQxNzMtOTZiYy1iODBkN2IzYzI2MWIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uHuvOOHIGUlX1SlUpx2vIB9zEfpfZA9psMpoqdj_fyQ',
  // backup image  'https://wh40k.lexicanum.com/mediawiki/images/9/9f/RT_Kommando.jpg',
  historyTable: [],
  quirkTable: [],
  equipment: [
    choppa,
    slugga,
    harpoon,
    sledgehammer,
    stikkbomb,
    dynamite,
    smokeGrenade,
    stunGrenade,
    climbingRope,
  ],
  rareEquipment: [
    shinySlugz,
    worksEyeball,
    devilsWhispa,
    skragasChoppa,
    fungalbrew,
    kleverKap,
  ],
  strategicAssets: [territorialGlyphs, lootHoard, explosivesStash],
  requisitions: [orkyConstitution, grabDaLoot, fearsomeReputation],
  specOps: [],
}
