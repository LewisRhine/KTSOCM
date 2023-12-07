export interface SpecOps {
  name: string
  description: string
  operationOne: OperationOne
  operationTwo: OperationTwo
  commendations: Commendation[]
  bonus?: string
}

interface Commendation {
  reward: string
  claimed: boolean
}

export interface Operation {
  name: string
  description: string
  rule: string
  complete: boolean
}

export interface OperationOne extends Operation {
  gamesCompleted: number
  gamesNeededToCompleted: number
}

export const isOperationOne = (
  operation: Operation,
): operation is OperationOne => {
  return (operation as OperationOne).gamesCompleted !== undefined
}

export type OperationTwo = Operation

const elimination: SpecOps = {
  name: 'Elimination',
  description:
    'Various rival factions have deployed kill teams in the area. If they gain a foothold, your faction’s war effort will be severely hampered. Your kill team must make a series of pre-emptive strikes and eventually eliminate the enemy’s command structure before their forces gain too much ground.',
  operationOne: {
    name: 'Draw Them Out',
    description:
      'You must conduct a series of raids to collect Intelligence on enemy leaders, bleed their forces, and draw them into a battle on terms in your favour.',
    rule: 'Complete five games in which you scored victory points from the ‘Mark Target’, ‘Execution’ and/or ‘Rob and Ransack’ Tac Op.',
    complete: false,
    gamesCompleted: 0,
    gamesNeededToCompleted: 5,
  },
  operationTwo: {
    name: 'Neutralise Target',
    description:
      'Intelligence has been gathered and the enemy’s composure is frayed. You must now apply overwhelming force to neutralise an enemy’s command structure. Nothing but the elimination of the enemy leader will achieve victory.',
    rule: 'Complete a game in which you scored victory points from the ‘Headhunter’ Tac Op.',
    complete: false,
  },
  commendations: [
    {
      reward: 'You gain one Requisition point.',
      claimed: false,
    },
    {
      reward:
        'The friendly operative that scored you victory points from the ‘Headhunter’ Tac Op earns 5 XP. This is not affected by a passed Casualty test.',
      claimed: false,
    },
    {
      reward:
        'You can add one item of rare equipment to your stash, or you can increase your asset capacity by one.',
      claimed: false,
    },
  ],
}

const recoverArcheotech: SpecOps = {
  name: 'Recover Archeotech',
  description:
    'Rumours are circulating of a hidden archeotech artefact, a rare and ancient item of technology that offers great power. Your kill team must search the area, and if the rumours prove to be true, retrieve the archeotech for high command.',
  operationOne: {
    name: 'Investigate Sites',
    description:
      'By conducting a comprehensive investigation of the area’s structures, you can discover the archeotech’s data traces. Collect enough data and you can triangulate the archeotech’s location.',
    rule: 'Complete five games in which you scored victory points from the ‘Seize Ground’ and/or ‘Vantage’ Tac Op.',
    complete: false,
    gamesCompleted: 0,
    gamesNeededToCompleted: 5,
  },
  operationTwo: {
    name: 'Retrieve Archeotech',
    description:
      'You have discovered the location of the archeotech. The enemy are unaware of its true power, so you must press the attack to retrieve it and deliver it to headquarters.',
    rule: 'Complete a game in which you scored victory points from the ‘Retrieval’ Tac Op.',
    complete: false,
  },
  commendations: [
    {
      reward: 'You gain three Requisition points.',
      claimed: false,
    },
    {
      reward:
        'You can add one item of rare equipment to your stash, or you can increase your asset capacity by one.',
      claimed: false,
    },
  ],
}

export const genericSpecOps: SpecOps[] = [
  elimination,
  recoverArcheotech,
  recoverArcheotech,
  recoverArcheotech,
  recoverArcheotech,
  recoverArcheotech,
  recoverArcheotech,
]
