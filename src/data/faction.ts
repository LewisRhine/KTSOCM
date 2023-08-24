import { Equipment } from "./equipment.ts";

export interface Faction {
  id: number;
  name: string;
  keyword: string;
  historyTable: string[];
  quirkTable: string[];
  equipment: Equipment[];
  coverImage?: string;
}

export const farstalkerKinband: Faction = {
  id: 1,
  name: "Farstalker Kinband",
  keyword: "FARSTALKER KINBAND",
  historyTable: [
    "Shadow Fighters: These warriors seek out hidden positions from which to strike.",
    "Endurance Hunters: These Kroot outlast their foes, ginding them down slowly but surely.",
    "Go for the Throat: These Kroot identify important enemy fighters and destroy them as soon as possible.",
    "Encircles: By surrounding their enemies, these fighters or off any possible route of escape",
    "Only the Strong Survive: These hardened Kroot are highly, pragmatic, and will quickly choose to eat their injured kin.",
    "Shock Troops: These Kibot are used for heavy Aging, and put their battlefeld experience to deadly use.",
  ],
  quirkTable: [
    "Shadow Fighters: These warriors seek out hidden positions from which to strike.",
    "Endurance Hunters: These Kroot outlast their foes, ginding them down slowly but surely.",
    "Go for the Throat: These Kroot identify important enemy fighters and destroy them as soon as possible.",
    "Encircles: By surrounding their enemies, these fighters or off any possible route of escape",
    "Only the Strong Survive: These hardened Kroot are highly, pragmatic, and will quickly choose to eat their injured kin.",
    "Shock Troops: These Kibot are used for heavy Aging, and put their battlefeld experience to deadly use.",
  ],
  coverImage: "https://wh40k.lexicanum.com/mediawiki/images/b/b6/KrootArt1.jpg",
  equipment: [],
};

export const hearthkynSalvager: Faction = {
  id: 2,
  name: "Hearthkyn Salvager",
  keyword: "HEARTHKYN SALVAGER",
  coverImage: "https://wh40k.lexicanum.com/mediawiki/images/8/82/LOVCover.jpg",
  historyTable: [],
  quirkTable: [],
  equipment: [],
};

export const factions: Array<Faction> = [farstalkerKinband, hearthkynSalvager];
