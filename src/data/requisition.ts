export interface Requisition {
  name: string
  cost: number
  description: string
  rule: string
}

export const operativeAssigned: Requisition = {
  name: 'Operative Assigned',
  cost: 1,
  description:
    "Kill teams grow in size in all manner of ways. High command might assign new soldiers. The kill team's boss might bully a lesser warrior into joining its mob. A new creature may daw and bite its way out of an amniotic sac, or a lone survivor might be found on the battlefield.",
  rule: 'Purchase this Requisition before or after a game. Add one operative to your dataslate. This must be an operative from your faction.',
}

const recuperate: Requisition = {
  name: 'Recuperate',
  cost: 1,
  description:
    'Rest and basic medical care goes a long way to restoring the health of injured operatives. The same can be said for a temporary forced shutdown, memory scrub or the reciting canticles of maintenance.',
  rule: 'Purchase this Requisition in the Update Dataslates step of a mission sequence, after rolling a Recovery test for a friendly operative that did not take part in the battle. Add 1 to the result of that Recovery test.',
}

const equipmentDrop: Requisition = {
  name: 'Equipment Drop',
  cost: 1,
  description:
    'For some kill teams, acquiring new equipment might involve being sent wargear by their commanders. For others it might mean stealing said weapons before the rival can collect it. On occasion a kill team might be issued with trial weapons - depraved creations from sadistic minds, highly advanced technologies developed by brilliant scientists or anything in between.',
  rule: 'Purchase this Requisition before or after a game. Select up to 5 points worth of your faction’s equipment and add it to your stash.',
}

const assetAcquired: Requisition = {
  name: 'Asset Acquired',
  cost: 1,
  description:
    'All kill teams seek to enhance their base of operations, whether that be with hideous pain-extractor stations, territorial prowler squigs, sophisticated drone surveillance technology or weaponsmith forges.',
  rule: 'Purchase this Requisition before or after a game. Add one strategic asset to your base of operations.',
}

const medivac: Requisition = {
  name: 'Medivac',
  cost: 1,
  description:
    "Some kill team operatives sustain injuries too severe to keep them in the front lines. They might be reprogrammed by their Overlords or Tech-Priest masters, sent to the Painboyz for patchin' up, despatched to highly sophisticated medical facilities or even sent to filthy, improvised medicae tents.",
  rule: 'Purchase this Requisition in the Update Dataslates step of a mission sequence, after rolling to determine a Battle Scar for a friendly operative. That operative suffers Cerebral Affliction instead, and cannot be selected for deployment in the next battle.',
}

const proficientOperative: Requisition = {
  name: 'Proficient Operative',
  cost: 1,
  description:
    'By sheer luck, divine beneficence, manipulation of fate or pre-programmed plan, some kill team operatives survive mission after mission. Some have faced so many different threats they have gained new capabilities through alien manners of biological adaptation. Others have learned new skills along the way, only making them more likely to survive.',
  rule: 'Purchase this Requisition in the Update Dataslates step of a mission sequence, when a friendly operative gains the Grizzled or Revered rank. You can select one additional specialism for that operative from the specialisms specified on its datacard, and can determine the Battle Honours it gains from any of its specialisms. Each operative can only be upgraded with this Requisition once.',
}

const weaponsmith: Requisition = {
  name: 'Weaponsmith',
  cost: 1,
  description:
    'Very well-equipped operatives serve vital functions in kill teams. How they become this way differs greatly. Some are blessed by their dark patrons with all manner of empyric gifts. Others have proven their worth and been mechanically upgraded by the masters they are programmed to serve. Many learn the skills to upgrade their own wargear, painstakingly combining rare components, or bashing them together until they resemble something that works.',
  rule: 'Purchase this Requisition before or after a game. Select a friendly operative with the Ace, Grizzled or Revered rank. Weapons that operative is equipped with can be upgraded with the rare equipment twice, rather than once. Each operative can only be upgraded with this Requisition once.',
}

export const generalRequisitions: Requisition[] = [
  operativeAssigned,
  recuperate,
  equipmentDrop,
  assetAcquired,
  medivac,
  proficientOperative,
  weaponsmith,
]
