import { useEffect } from 'react'
import useDataslateStore from '../stores/dataslateStore.ts'
import { isGear, isWeapon } from '../data/equipment.ts'
import WeaponProfile from '../component/WeaponProfile.tsx'
import GearProfile from '../component/GearProfile.tsx'
import useEquipmentShopStore from '../stores/equipmentShopStore.ts'
import { strategicAssets } from '../data/strategicAssets.ts'

interface Props {
  showModal: boolean
  onClose: () => void
}

const BuyAssetModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const assetCapacity = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.assetCapacity,
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
          <p className="modal-card-title"> Strategic Assets {assetCapacity}</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          {availableStrategicAssets?.map((asset, index) => {
            return <div className="title"> {asset.name}</div>
          })}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={onSave}>
            Save
          </button>
          <button className="button" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  )
}

export default BuyAssetModal
