import useDataslateStore from '../stores/dataslateStore.ts'
import BuyAssetModal from '../modals/BuyAssetModal.tsx'
import AssetProfileModal from '../modals/AssetProfileModal.tsx'
import { useState } from 'react'
import { StrategicAssets } from '../data/strategicAssets.ts'

const StrategicAssets = () => {
  const strategicAssets = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.strategicAssets,
  )
  const removeFromStrategicAssets = useDataslateStore(
    (state) => state.removeFromStrategicAssets,
  )

  const [showBuyAssetModal, setShowBuyAssetModal] = useState(false)
  const [assetProfile, setAssetProfile] = useState<StrategicAssets>()

  const total = strategicAssets?.length ?? 0
  const assetCapacity =
    useDataslateStore(
      (state) => state.selectedDataslate?.baseOfOperations.assetCapacity,
    ) ?? 0

  return (
    <>
      <BuyAssetModal
        showModal={showBuyAssetModal}
        onClose={() => setShowBuyAssetModal(false)}
        selectedStrategicAssets={[]}
      />
      <AssetProfileModal
        asset={assetProfile}
        onClose={() => setAssetProfile(undefined)}
      />
      <div>
        <div className={'buttons'}>
          <button
            className={'button is-primary is-small'}
            onClick={() => setShowBuyAssetModal(true)}>
            Acquire Asset
          </button>
        </div>
        <div>
          <span className={'title'}>Strategic Assets</span>
          <span className={'subtitle pl-2'}>
            {total}/{assetCapacity}
          </span>
        </div>
      </div>
      <br />
      {strategicAssets?.map((asset, index) => (
        <div className={'pb-1'} key={index}>
          <button
            className="button is-small"
            onClick={() => removeFromStrategicAssets(asset)}>
            Remove
          </button>
          <a onClick={() => setAssetProfile(asset)}>
            <span className="pl-2"> {asset.name}</span>
          </a>
        </div>
      ))}
    </>
  )
}

export default StrategicAssets
