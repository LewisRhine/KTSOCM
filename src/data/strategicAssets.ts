export interface StrategicAssets {
  name: string
  description: string
  rule: string
}

export const engineeringBay: StrategicAssets = {
  name: 'Engineering Bay',
  description:
    'Whether it be slabs of scrapmetal, larvae that excrete rapidly hardening mucus or simple construction tools and materials, kill teams of all stripes have access to means to bolster defensive positions.',
  rule: 'At the end of the Set Up Barricades step of the mission sequence, you can select one terrain feature within  of your drop zone. Until the end of the battle, all parts of that feature with the Light trait have the Heavy trait instead.',
}

export const intelligenceNetwork: StrategicAssets = {
  name: 'Intelligence Network',
  description:
    'Kill teams use all manner of methods to secure the intelligence they need to carry out their missions and gain advantages over the enemy Local agents, covert transit routes, stolen access codes, classified data, prisoners, scrapcodes, stealth drones, sneak-squigs, memory-burrowing beetles, psychic spoor trackers and nigh-magical hacking technologies all play a role.',
  rule: 'In each game, if you select the Infiltrate option in the Scouting step, you can use that option one additional time during the first Turning Point.',
}

export const surveillanceSystem: StrategicAssets = {
  name: 'Surveillance System',
  description:
    'The base of operations is fitted with all manner of listening devices, thermal scanners and proximity sensors in the form of surveillance servitors, advanced tactical drones, watch-squigs, makeshift devices, tentacles and highly sensitive insectoid antennae. Many of these systems are portable, lending enormous tactical advantages to the kill teams who use them.',
  rule: 'In each game, if you select the Recon option in the Scouting step, you can use that option one additional time when resolving your selection.',
}

export const expandedArmoury: StrategicAssets = {
  name: 'Expanded Armoury',
  description:
    'A substantial and well-stocked armoury from which your operatives can gear up sufficiently before each mission is crucial. Some wargear will have been ripped from the dead hands of enemies, or indeed friends, while others are issued specially for field testing. Some will have been constructed by hand out of scrap, or will be standard weaponry provided by high command. This wargear may even have been grown in amniotic sacs fed by the kill team with the flesh of their prey.',
  rule: 'In the Select Equipment step of a mission sequence, you can use 4 additional points worth of equipment to equip operatives from your kill team with.',
}

export const medBay: StrategicAssets = {
  name: 'Med Bay',
  description:
    'All operatives in a kill team will suffer wounds and injuries that need restoring after battle, and all factions have different ways of bringing their troops back to full health. Some utilise hyper-advanced medical facilities with one-use sterilised tools and stations, some depend on the brutal attention of lobotomised medicare servitors, and others even hibernate for a time in thick-membraned sacs full of restorative fluids.',
  rule: 'In each Update Dataslates step of the mission sequence, you can re-roll one Casualty test. This is in addition to any other Casualty test re-rolls.',
}

export const warShrine: StrategicAssets = {
  name: 'War Shrine',
  description:
    'A venerated assemblage of relics, war logs and banners that exemplifies the mighty record of your kill team and inspires those that join its ranks. Your kill team might keep the skulls of fallen enemies, recorded words of encouragement from inspirational leaders, texts of battle-hymns or rags marked with the scent of those to be hunted and consumed next.',
  rule: 'In the Update Experience step of a mission sequence, you can select one operative of Adept rank that was selected for deployment to gain 1XP. You can only add this asset to your base of operations if your dataslate includes at least one operative of Ace rank or higher.',
}

export const commsNetwork: StrategicAssets = {
  name: 'Comms Network',
  description:
    'A closed communications network for your operatives to receive real-time battlefield information and react accordingly as well as provide it for high command. The factions of the 41 st Millennium use myriad ways to communicate with their kill teams, whether it be the daemon-possessed and chained psykers of the forces of Chaos, data uplink nodes of the Adeptus Meehanicus or wraithbone psychic broadcast amplifiers of the Asuryani.',
  rule: 'Once per battle, when rolling off to determine who has the initiative, you can re-roll your dice.',
}

export const tacticalUplink: StrategicAssets = {
  name: 'Tactical Uplink',
  description:
    'An overlay of the killzone is transmitted to your operatives, allowing them to plan their tactics and strike at the opportune moment. For some this might be a data uplink directly into mechanical minds, for others this might take the form of a sudden instinctive compulsion or a direct psychic pulse of information.',
  rule: 'Once per Turning Point, you can use a Tactical Ploy without spending any CPs.',
}

export const stimmStash: StrategicAssets = {
  name: 'Stimm Stash',
  description:
    'Whether it be stimms, combat drugs, speshul shroom brews, complex mineral supplementations or fleshy tubes of liquid painkillers and growth hormones, these restoratives are on hand to aid the recovery of your operatives and maintain their fighting strength.',
  rule: 'In the Update Dataslates step of the mission sequence, each time you take a Recovery test, you can re-roll unmodified results of 1.',
}

export const strategicAssets: Array<StrategicAssets> = [
  stimmStash,
  tacticalUplink,
  commsNetwork,
  warShrine,
  medBay,
  expandedArmoury,
  surveillanceSystem,
  intelligenceNetwork,
  engineeringBay,
]
