import BaseInfo from './BaseInfo.tsx'
import BaseStash from './BaseStash.tsx'
import { useState } from 'react'
import BuyAssetModal from '../modals/BuyAssetModal.tsx'
import useDataslateStore from '../stores/dataslateStore.ts'
import AssetProfileModal from '../modals/AssetProfileModal.tsx'
import { StrategicAssets } from '../data/strategicAssets.ts'

const BaseOfOperations = () => {
  const [showBuyAssetModal, setShowBuyAssetModal] = useState(false)
  const [AssetProfile, setAssetProfile] = useState<StrategicAssets>()

  const strategicAssets = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.strategicAssets,
  )
  const removeFromStrategicAssets = useDataslateStore(
    (state) => state.removeFromStrategicAssets,
  )

  return (
    <>
      <BuyAssetModal
        showModal={showBuyAssetModal}
        onClose={() => setShowBuyAssetModal(false)}
        selectedstrategicAssets={[]}
      />
      <AssetProfileModal
        asset={AssetProfile}
        onClose={() => setAssetProfile(undefined)}
      />
      <div className={'content has-text-centered'}>
        <BaseInfo />
      </div>
      <div className={'columns'}>
        <div className={'column'}>
          <BaseStash />
        </div>
        <div className={'column'}>
          <p className="title">Strategic Assets</p>
          <button
            className={'button is-primary is-small'}
            onClick={() => setShowBuyAssetModal(true)}>
            Acquire Asset
          </button>
          {strategicAssets?.map((asset, index) => (
            <div className={'has-addons'} key={index}>
              <button
                className="button is-small"
                onClick={() => removeFromStrategicAssets(asset)}>
                Remove
              </button>
              <a onClick={() => setAssetProfile(asset)}>
                <span className="title is-6"> {asset.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BaseOfOperations
