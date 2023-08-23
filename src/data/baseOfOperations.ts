import { Equipment } from "./equipment.ts";
import { StrategicAssets } from "./strategicAssets.ts";

export interface BaseOfOperations {
  id: number;
  name: string;
  description?: string;
  stash: Equipment[];
  strategicAssets: StrategicAssets[];
  assetCapacity: number;
  userId: string;
}
