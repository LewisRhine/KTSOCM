import { StrategicAssets } from './../data/strategicAssets'
import { create } from 'zustand'
import { AvailableStrategicAssets } from '../data/baseOfOperations.ts'
import useDataslateStore from './dataslateStore.ts'


interface AssetShopStoreState {
    availableAsset: AvailableAsset[]
  
  }


  const useAssetShopStore = create<AssetShopStoreState>((set, get) => ({
    availableAsset:
      useDataslateStore.getState().selectedDataslate?.baseOfOperations.assetCapacity,
  
  