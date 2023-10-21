import { StrategicAssets } from './../data/strategicAssets'
import { create } from 'zustand'
import { AvailableStrategicAssets } from '../data/baseOfOperations.ts'
import useDataslateStore from './dataslateStore.ts'


interface AssetShopStoreState {
    assetCapacity: number
    availableStrategicAssets: AvailableStrategicAssets[]
  
  }


  const useAssetShopStore = create<AssetShopStoreState>((set, get) => ({
    assetCapacity:
      useDataslateStore.getState().selectedDataslate?.baseOfOperations.assetCapacity ?? 0,
    availableStrategicAssets:
        useDataslateStore.getState().selectedDataslate?.baseOfOperations.strategicAssets ?? []

  
  