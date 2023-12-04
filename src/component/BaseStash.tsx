import useDataslateStore from '../stores/dataslateStore.ts'
import { useState } from 'react'
import BuyEquipmentModal from '../modals/BuyEquipmentModal.tsx'
import { Equipment } from '../data/equipment.ts'
import { AvailableEquipment } from '../data/baseOfOperations.ts'
import EquipmentProfileModal from '../modals/EquipmentProfileModal.tsx'
import BuyAssetModal from '../modals/BuyAssetModal.tsx'
import { StrategicAssets } from '../data/strategicAssets.ts'
import AssetProfileModal from '../modals/AssetProfileModal.tsx'

const BaseStash = () => {
  const availableEP = useDataslateStore(
    (state) => state.selectedDataslate!.baseOfOperations.stash.availableEP,
  )
  const stash = useDataslateStore(
    (state) => state.selectedDataslate!.baseOfOperations.stash,
  )

  const availableEquipment = stash.availableEquipment.sort((a, b) => {
    if (a.equipment.name < b.equipment.name) return -1
    if (a.equipment.name > b.equipment.name) return 1
    return 0
  })

  const saveStash = useDataslateStore((state) => state.saveStash)

  const [showBuyEquipmentModal, setshowBuyEquipmentModal] = useState(false)
  const [showBuyAssetModal, setShowBuyAssetModal] = useState(false)
  const [equipmentProfile, setEquipmentProfile] = useState<Equipment>()
  const [AssetProfile, setAssetProfile] = useState<StrategicAssets>()

  const unEquippedEquipment = availableEquipment.filter(
    ({ isEquipped }) => !isEquipped,
  )
  const equippedEquipment = availableEquipment.filter(
    ({ isEquipped }) => isEquipped,
  )

  const equip = (equipment: AvailableEquipment) => {
    const updated = availableEquipment.map((availableEquipment) => {
      if (availableEquipment === equipment)
        return {
          ...availableEquipment,
          isEquipped: true,
        }

      return availableEquipment
    })

    saveStash({ ...stash, availableEquipment: updated })
  }

  const unequip = (equipment: AvailableEquipment) => {
    const updated = availableEquipment.map((availableEquipment) => {
      if (availableEquipment === equipment)
        return {
          ...availableEquipment,
          isEquipped: false,
        }

      return availableEquipment
    })

    saveStash({ ...stash, availableEquipment: updated })
  }

  return (
    <>
      <EquipmentProfileModal
        equipment={equipmentProfile}
        onClose={() => setEquipmentProfile(undefined)}
      />
      <AssetProfileModal
        asset={AssetProfile}
        onClose={() => setAssetProfile(undefined)}
      />
      <BuyAssetModal
        showModal={showBuyAssetModal}
        onClose={() => setShowBuyAssetModal(false)}
        selectedstrategicAssets={[]}
      />
      <BuyEquipmentModal
        showModal={showBuyEquipmentModal}
        onClose={() => setshowBuyEquipmentModal(false)}
      />
      <div className={'columns'}>
        <div className={'column'}>
          <div>
            <div>
              <span className={'title is-4'}>Stash</span>
              <span className={'subtitle'}> {availableEP} EP Available</span>
            </div>
            <br />
            <div className={'buttons'}>
              <button
                className={'button is-primary is-small'}
                onClick={() => setshowBuyEquipmentModal(true)}>
                Equipment
              </button>
            </div>
          </div>
          <br />
          <div>
            {availableEquipment.length === 0 && (
              <p className="title is-4">Empty!</p>
            )}
            {unEquippedEquipment.map((availableEquipment, index) => (
              <div key={index} className={'has-addons'}>
                <button
                  className={'button is is-small'}
                  onClick={() => equip(availableEquipment)}>
                  Equip
                </button>
                <a
                  onClick={() =>
                    setEquipmentProfile(availableEquipment.equipment)
                  }>
                  <span className="title is-6">
                    {' '}
                    {availableEquipment.equipment.name}
                  </span>
                </a>
              </div>
            ))}
            <br />
            {equippedEquipment.map((availableEquipment, index) => (
              <div key={index} className={'has-addons'}>
                <button
                  className={'button is is-small'}
                  onClick={() => unequip(availableEquipment)}>
                  Unequip
                </button>
                <a
                  onClick={() =>
                    setEquipmentProfile(availableEquipment.equipment)
                  }>
                  <span className="subtitle is-6">
                    {' '}
                    {availableEquipment.equipment.name}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BaseStash
