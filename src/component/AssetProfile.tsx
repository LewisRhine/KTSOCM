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

  const addtoStrategicAssets = useDataslateStore(
    (state) => state.addtoStrategicAssets,
  )

  const removeFromStrategicAssets = useDataslateStore(
    (state) => state.removeFromStrategicAssets,
  )

  const isAssetSelected = () => {
    if (
      selectedstrategicAssets?.some(
        (selectedstrategicAssets) =>
          selectedstrategicAssets.name === asset.name,
      )
    )
      return true
    else return false
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
          {!isAssetSelected() && (
            <button
              className="button is-small"
              onClick={() => addtoStrategicAssets(asset)}>
              Add
            </button>
          )}
          {isAssetSelected() && (
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
