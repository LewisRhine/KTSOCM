import useDataslateStore from '../stores/dataslateStore.ts'
import { strategicAssets } from '../data/strategicAssets.ts'
import StrategicAssetsProfile from '../component/AssetProfile.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
  selectedStrategicAssets: []
}

const BuyAssetModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const assetCapacity = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.assetCapacity,
  )

  const selectedAssetLength = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.strategicAssets.length,
  )

  const factionStrategicAssets =
    useDataslateStore(
      (state) => state.selectedDataslate?.faction.strategicAssets,
    ) ?? []
  const factionName =
    useDataslateStore((state) => state.selectedDataslate?.faction.name) ?? ''

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            Strategic Assets {selectedAssetLength} / {assetCapacity}
          </p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <p className="notification is-primary title is-4">
            {factionName} Strategic Assets
          </p>
          {factionStrategicAssets?.map((asset, index) => {
            return <StrategicAssetsProfile key={index} asset={asset} />
          })}
          <p className="notification is-primary title is-4">
            General Strategic Assets
          </p>
          {strategicAssets?.map((asset, index) => {
            return <StrategicAssetsProfile key={index} asset={asset} />
          })}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary" onClick={onClose}>
            Done
          </button>
        </footer>
      </div>
    </div>
  )
}

export default BuyAssetModal
