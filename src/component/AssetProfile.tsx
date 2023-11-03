import { StrategicAssets } from '../data/strategicAssets.ts'
import useDataslateStore from '../stores/dataslateStore.ts'

interface Props {
  asset: StrategicAssets
  buyMode?: boolean
}

const StrategicAssetsProfile = (props: Props) => {
  const { asset, buyMode } = props
  const { name, description, rule } = asset
  const selectedstrategicAssets = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.strategicAssets,
  )

  const selectedstrategicAssetsLength =
    useDataslateStore(
      (state) =>
        state.selectedDataslate?.baseOfOperations.strategicAssets.length,
    ) ?? 0

  const addtoStrategicAssets = useDataslateStore(
    (state) => state.addtoStrategicAssets,
  )

  const removeFromStrategicAssets = useDataslateStore(
    (state) => state.removeFromStrategicAssets,
  )

  const assetCapacity = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.assetCapacity || 0,
  )

  const isAssetSelectable = () => {
    const assetNames = selectedstrategicAssets?.some(
      (selectedstrategicAssets) => selectedstrategicAssets.name === asset.name,
    )

    if (assetCapacity > selectedstrategicAssetsLength && !assetNames) {
      return true
    } else {
      return false
    }
  }

  return (
    <div>
      <div className={'columns'}>
        <div className={'column'}>
          <p className={'title is-5'}>{name}</p>
          <p>{description}</p>
          <p>{rule}</p>
        </div>
        <div>
          {isAssetSelectable() && (
            <button
              className="button is-small"
              onClick={() => addtoStrategicAssets(asset)}>
              Add
            </button>
          )}
          {!isAssetSelectable() && (
            <button
              className="button is-small"
              onClick={() => removeFromStrategicAssets(asset)}>
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default StrategicAssetsProfile
