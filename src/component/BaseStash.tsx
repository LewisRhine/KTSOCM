import useDataslateStore from '../stores/dataslateStore.ts'
import { useState } from 'react'
import BuyEquipmentModal from '../modals/BuyEquipmentModal.tsx'
import { Equipment } from '../data/equipment.ts'
import { AvailableEquipment } from '../data/baseOfOperations.ts'
import EquipmentProfileModal from '../modals/EquipmentProfileModal.tsx'
import BuyAssetModal from '../modals/BuyAssetModal.tsx'
import GetRareEquipmentModal from '../modals/GetRareEquipmentModal.tsx'

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
  const [showRareEquipmentModal, setshowRareEquipmentModal] = useState(false)
  const [showBuyAssetModal, setShowBuyAssetModal] = useState(false)
  const [equipmentProfile, setEquipmentProfile] = useState<Equipment>()

  const unEquippedEquipment = availableEquipment.filter(
    ({ isEquipped }) => !isEquipped,
  )
  const equippedEquipment = availableEquipment.filter(
    ({ isEquipped }) => isEquipped,
  )
  const totalEquippedPoints = equippedEquipment.reduce(
    (accumulator, currentValue) => accumulator + currentValue.equipment.cost,
    0,
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
      <BuyAssetModal
        showModal={showBuyAssetModal}
        onClose={() => setShowBuyAssetModal(false)}
        selectedStrategicAssets={[]}
      />
      <BuyEquipmentModal
        showModal={showBuyEquipmentModal}
        onClose={() => setshowBuyEquipmentModal(false)}
      />
      <GetRareEquipmentModal
        showModal={showRareEquipmentModal}
        onClose={() => setshowRareEquipmentModal(false)}
      />
      <div>
        <div className={'buttons'}>
          <button
            className={'button is-primary is-small'}
            onClick={() => setshowBuyEquipmentModal(true)}>
            Equipment
          </button>
          <button
            className={'button is-dark is-small'}
            onClick={() => setshowRareEquipmentModal(true)}>
            Rare Equipment
          </button>
        </div>
        <div>
          <span className={'title'}>Stash</span>
          <span className={'subtitle pl-2'}>{availableEP} EP Available</span>
        </div>
      </div>
      <br />
      <div>
        {availableEquipment.length === 0 && (
          <p className="title is-4">Empty!</p>
        )}
        {unEquippedEquipment.map((availableEquipment, index) => (
          <div key={index} className={'pb-1'}>
            <button
              className={'button is is-small'}
              onClick={() => equip(availableEquipment)}>
              Equip
            </button>
            <a
              onClick={() => setEquipmentProfile(availableEquipment.equipment)}>
              <span className="pl-2">{availableEquipment.equipment.name}</span>
              {availableEquipment.equipment.rare && (
                <span className={'subtitle is-italic is-6'}> (Rare)</span>
              )}
            </a>
          </div>
        ))}
        <br />
        {equippedEquipment.length > 0 && (
          <p className={'pb-2'}>Total equipped points {totalEquippedPoints}</p>
        )}
        {equippedEquipment.map((availableEquipment, index) => (
          <div key={index} className={'pb-1'}>
            <button
              className={'button is is-small'}
              onClick={() => unequip(availableEquipment)}>
              Unequip
            </button>
            <a
              onClick={() => setEquipmentProfile(availableEquipment.equipment)}>
              <span className="pl-2">{availableEquipment.equipment.name}</span>
              {availableEquipment.equipment.rare && (
                <span className={'is-italic'}> (Rare)</span>
              )}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default BaseStash
