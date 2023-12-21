import { Faction } from '../data/faction.ts'
import { Gear, Weapon } from '../data/equipment.ts'
import { blast, indirect, limited, rng } from '../data/specialRules.ts'
import { StrategicAssets } from '../data/strategicAssets.ts'
import { Requisition } from '../data/requisition.ts'

// Requisitions

export const ruthlessCompetition: Requisition = {
  name: 'Ruthless Competition',
  cost: 1,
  description:
    'Drukhari are self-serving schemers, developing rivalries that many a Kabalite leader is happy to let play out. Such contests not only allow the Archsybarite to assess the ambitions of potential usurpers to their own position, but also serve to elicit greater acts of ruthless violence amongst their underlings.',
  rule:
    'Purchase this Requisition before or after a game, if your kill team is currently conducting a Spec Op. Select two friendly HAND OF THE ARCHON operatives. Until that Spec Op ends:' +
    '/n' +
    'You cannot purchase this Requisition again.' +
    '/n' +
    'Keep an Ambition tally for each of those operatives, adding 1 to' +
    '/n' +
    'their tally each time they incapacitate an enemy operative.' +
    '/n' +
    'At the end of the Select a Kill Team step, if the friendly operative with an Ambition tally lower than the other is selected for deployment, they gain 1 Pain token (pg 41) for the battle.',
}

export const darkRegeneration: Requisition = {
  name: 'Dark Regeneration',
  cost: 2,
  description:
    'If the fell price can be paid, a Haemonulus can employ its eldritch science to fully regenerate a fallen Drukhari from just a single piece of flesh.',
  rule: 'Purchase this Requisition when a friendly HAND OF THE ARCHON operative is slain. That operative is not slain, but must be Rested for the next two battles.',
}

export const ambitiousAdvancement: Requisition = {
  name: 'Ambitious Advancement',
  cost: 1,
  description:
    'Power amongst the Kabals is viciously fought for. Once gained, this superiority must be jealously defended.',
  rule: 'Purchase this Requisition after a battle. Select one friendly HAND OF THE ARCHON operative that earned more experience points than another friendly HAND OF THE ARCHON operative of a higher rank from that battle. That selected friendly operative earns a number of experience points equal to the difference between those operatives in ranks. For example, if an operative of Adept rank earned more experience points than an operative of Ace rank, that first operative would earn 2XP.',
}

// Rare Equipment
export const ghostplateArmour: Gear = {
  id: 0,
  name: 'Ghostplate Armour',
  description: '',
  cost: 2,
  ability: 'The operative has a Save characteristic of 3+ for the battle.',
  rare: true,
}

export const tormentedSoulstone: Gear = {
  id: 0,
  name: 'Tormented Soulstone',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'Tormented Soulstone: Once during the battle, when this operative is activated, you can use this ability. If you do so, this operative regains D3+3 lost wounds.',
  rare: true,
}

export const cloneField: Gear = {
  id: 0,
  name: 'Clone Field',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'Clone Field: Once during the battle, when this operative is selected as the target of a combat or shooting attack, you can use this ability. If you do so, this operative can immediately perform a free Dash action as though it can FLY (and can do so even if it is within Engagement Range of an enemy operative). If it is no longer a valid target, that combat or shooting attack immediately ends (the action points subtracted are not refunded).',
  rare: true,
}

export const painCasket: Gear = {
  id: 0,
  name: 'Pain Casket',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'Pain Casket: Each time a friendly HAND OF THE ARCHON operative within 6" of this operative would gain a Pain token, you can select another friendly HAND OF THE ARCHON operative within 6" of this operative to gain it instead.',
  rare: true,
}

export const ivingTrophy: Gear = {
  id: 0,
  name: 'Iving Trophy',
  description: '',
  cost: 3,
  ability: 'The operative gains 1 Pain token for the battle.',
  rare: true,
}

export const soulScentBarb: Gear = {
  id: 0,
  name: 'Tormented Soulstone',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'Soul-scent Barb: When you select this item of equipment, also select one enemy operative. Until the end of the battle, each time this operative fights in combat with or makes a shooting attack against that enemy operative, in the Roll Attack Dice step of that combat or shooting attack, you can re-roll any or all of your attack dice.',
  rare: true,
}

//Strategic Assets

export const shrineOfSuffering: StrategicAssets = {
  name: 'Shrine Of Suffering',
  description:
    'Hands of the Archon may be forced to endure extended missions beyond Commorragh, where prey can be scarce. To revitalise their waning souls, such kill teams may acquire one of these small Engines of Pain. Forced into the embrace of its nest of metal and flesh appendages - tipped with all manner of blades, drills, toxin injectors and psychotropic brain-barbs - even a single captive can provide hours of invigorating suffering.',
  rule: 'In the Select a Kill Team step, you can select one friendly HAND OF THE ARCHON operative to gain 1 Pain token for the battle.',
}

export const painAdeptLaboratory: StrategicAssets = {
  name: 'Pain-Adept Laboratory',
  description:
    'This kill team’s patron has negotiated the skills of an agent of a Haemonculus Coven. In exchange for access to specimens taken captive by the Hand, the Haemonculus’ ministrations of arcane fleshcraft serve to reknit the Kabalites’ wounds and resculpt their damaged forms. Where eldritch surgery ends and experimentation begins, however, is an oft-blurred line...',
  rule: 'Once after each battle, you can select one friendly HAND OF THE ARCHON operative that has a Battle Scar. Remove one Battle Scar from that operative (you can remove one it gained from that battle), but it must be Rested in your next game.',
}

export const toxinCryoDistillery: StrategicAssets = {
  name: 'Toxin Cryo-Distillery',
  description: `Though dwarfed in scale by the vast complexes controlled by their Kabal in Commorragh, this kill team operates a compact bio-alchemical facility. Its endothermic lattice converts a variety of lethal venoms into enough crystalline slivers to make the Hand's arsenal of splinter weapons even more potent.`,
  rule: 'Each time a friendly operative makes a shooting attack with a shardcarbine, splinter cannon, splinter pistol or splinter rifle, at the end of the Roll Attack Dice step of that shooting attack, if you did not retain any critical hits, you can change one of your retained normal hits to a critical hit instead (resolve critical hit rules accordingly).',
}

// Equipment
export const plasmaGrenade: Weapon = {
  id: 0,
  name: 'Plasma Grenade',
  description:
    'The operative is equipped with the following ranged weapon for the battle:',
  type: 'range',
  cost: 3,
  attacks: 4,
  ballisticsSkills: 3,
  normalDamage: 3,
  criticalDamage: 4,
  rare: false,
  criticalHitRules: [],
  specialRules: [rng('6"'), blast('2"'), indirect, limited],
}

export const chainSnare: Gear = {
  id: 0,
  name: 'Chain Snare',
  description: 'The operative gains the following ability for the battle:',
  cost: 1,
  ability:
    'Chain Snare: While only one enemy operative is within Engagement Range of this operative, that enemy operative is snared. Each time a snared enemy operative would perform a Fall Back action, roll one D6, subtracting 1 if that enemy operative has a higher Wounds characteristic than this operative, and adding 1 if that enemy operative is injured. On a 4+, that enemy operative cannot perform that action, but no action points are subtracted.',
  rare: false,
}

export const wickedBlade: Gear = {
  id: 0,
  name: 'Wicked Blade',
  description: '',
  cost: 1,
  ability:
    'Operative equipped with an array of blades only. Add 1 to that weapon’s Attacks characteristic for the battle.',
  rare: false,
}

export const toxinCoating: Gear = {
  id: 0,
  name: 'Toxin Coating',
  description: 'The operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'Select one melee weapon the operative is equipped with. That weapon gains the Lethal 5+ special rule for the battle. If you selected array of blades, this equipment costs 1EP; otherwise, it costs 2EP.',
  rare: false,

  //need to account for TOXIN COATING [1/2EP]
}

export const refinedPoison: Gear = {
  id: 0,
  name: 'Refined Poison',
  description: '',
  cost: 3,
  ability:
    'Select one shardcarbine, splinter cannon, splinter pistol or splinter rifle the operative is equipped with. Add 1 to the Normal Damage characteristic of that weapon for the battle. If you selected a splinter pistol or splinter rifle, this equipment costs 2EP; otherwise, it costs 3EP.',
  rare: false,

  //need to account for REFINED POISON [2/3EP]
}

export const phantasmGrenadeLauncher: Gear = {
  id: 0,
  name: 'Phantasm Grenade Launcher+',
  description: 'The operative gains the following ability for the battle:',
  cost: 3,
  ability:
    'PHANTASM GRENADE 1AP' +
    '/n' +
    'Select one point on the killzone within 6" of this operative. Roll one D6 for each operative within 3" of that point, subtracting 1 from the result if that operative is not Visible to this operative. On a 4+, subtract 1 from that operative’s APL. This operative can only perform this action once, and cannot perform this action while within Engagement Range of an enemy operative.',
  rare: false,
}

export const kabaliteBanner: Gear = {
  id: 0,
  name: 'Kabalite Banner+',
  description: 'This operative gains the following ability for the battle:',
  cost: 2,
  ability:
    'Kabalite Banner: While a friendly HAND OF THE ARCHON operative is Visible to and within 3" of this operative, when determining control of an objective marker, treat that friendly operative’s APL characteristic as being 1 higher. Note that this is not a modifier.',
  rare: false,
}
export const handOfTheArchon: Faction = {
  id: 2,
  name: 'Hand Of The Archon',
  keyword: 'HAND OF THE ARCHON',
  coverImage: '',
  historyTable: [],
  quirkTable: [],
  equipment: [
    kabaliteBanner,
    phantasmGrenadeLauncher,
    refinedPoison,
    toxinCoating,
    wickedBlade,
    chainSnare,
    plasmaGrenade,
  ],
  rareEquipment: [
    soulScentBarb,
    painCasket,
    ivingTrophy,
    cloneField,
    tormentedSoulstone,
    ghostplateArmour,
  ],
  strategicAssets: [
    toxinCryoDistillery,
    painAdeptLaboratory,
    shrineOfSuffering,
  ],
  requisitions: [ruthlessCompetition, ambitiousAdvancement, darkRegeneration],
  specOps: [],
}
