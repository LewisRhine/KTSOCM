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
    (state) => state.addToStrategicAssets,
  )

  const removeFromStrategicAssets = useDataslateStore(
    (state) => state.removeFromStrategicAssets,
  )

  const assetCapacity = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.assetCapacity || 0,
  )

  const isNameInBase = selectedstrategicAssets?.some(
    (selectedstrategicAssets) => selectedstrategicAssets.name === asset.name,
  )
  const isAssetSelectable =
    assetCapacity > selectedstrategicAssetsLength && !isNameInBase

  return (
    <div>
      <div className={'columns'}>
        <div className={'column'}>
          <p className={'title is-5'}>{name}</p>
          <p>{description}</p>
          <p>{rule}</p>
        </div>
        <div className={'column is-3'}>
          {isAssetSelectable && (
            <button
              className="button is-small"
              onClick={() => addtoStrategicAssets(asset)}
              disabled={!isAssetSelectable}>
              Add
            </button>
          )}
          {isNameInBase && (
            <button
              className="button is-small"
              onClick={() => removeFromStrategicAssets(asset)}
              disabled={!isNameInBase}>
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default StrategicAssetsProfile
