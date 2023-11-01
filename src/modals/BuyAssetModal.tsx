import { useEffect } from 'react'
import useDataslateStore from '../stores/dataslateStore.ts'
import { isGear, isWeapon } from '../data/equipment.ts'
import GearProfile from '../component/GearProfile.tsx'
import useEquipmentShopStore from '../stores/equipmentShopStore.ts'
import { strategicAssets } from '../data/strategicAssets.ts'
import StrategicAssetsProfile from '../component/AssetProfile.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
  selectedstrategicAssets: []
}

const BuyAssetModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const assetCapacity = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.assetCapacity,
  )
  const selectedstrategicAssets = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.strategicAssets,
  )

  const factionStrategicAssets =
    useDataslateStore(
      (state) => state.selectedDataslate?.faction.strategicAssets,
    ) ?? []

  const availableStrategicAssets = [
    ...strategicAssets,
    ...factionStrategicAssets,
  ]

  const onSave = () => {}

  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {' '}
            Strategic Assets Availabe: {assetCapacity}
          </p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          {availableStrategicAssets?.map((asset, index) => {
            return <StrategicAssetsProfile key={index} asset={asset} />
          })}
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={onClose}>
            Done
          </button>
        </footer>
      </div>
    </div>
  )
}

export default BuyAssetModal
