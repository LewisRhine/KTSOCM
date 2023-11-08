import useDataslateStore from '../stores/dataslateStore.ts'
import { useState } from 'react'
import BuyEquipmentModal from '../modals/BuyEquipmentModal.tsx'
import ConfirmModal from '../modals/ConfirmModal.tsx'
import { Equipment } from '../data/equipment.ts'
import { AvailableEquipment } from '../data/baseOfOperations.ts'
import EquipmentProfileModal from '../modals/EquipmentProfileModal.tsx'

const BaseStash = () => {
  const availableEP = useDataslateStore(
    (state) => state.selectedDataslate!.baseOfOperations.stash.availableEP,
  )
  const reqPoints = useDataslateStore(
    (state) => state.selectedDataslate!.reqPoints,
  )
  const stash = useDataslateStore(
    (state) => state.selectedDataslate!.baseOfOperations.stash,
  )

  const availableEquipment = stash.availableEquipment.sort((a, b) => {
    if (a.equipment.name < b.equipment.name) return -1
    if (a.equipment.name > b.equipment.name) return 1
    return 0
  })

  const equipmentDrop = useDataslateStore((state) => state.equipmentDrop)
  const saveStash = useDataslateStore((state) => state.saveStash)

  const [showBuyModal, setShowBuyModal] = useState(false)
  const [equipmentProfile, setEquipmentProfile] = useState<Equipment>()
  const [showConfirmEquipmentDropModal, setShowConfirmEquipmentDropModal] =
    useState(false)

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
      <BuyEquipmentModal
        showModal={showBuyModal}
        onClose={() => setShowBuyModal(false)}
      />
      <ConfirmModal
        showModal={showConfirmEquipmentDropModal}
        message={'Make an equipment drop?'}
        onConfirm={() => {
          equipmentDrop()
          setShowConfirmEquipmentDropModal(false)
        }}
        onClose={() => setShowConfirmEquipmentDropModal(false)}
      />

      <div>
        <div>
          <span className={'title is-4'}>Stash</span>
          <span className={'subtitle'}> {availableEP} EP Available</span>
        </div>
        <br />
        <div className={'buttons'}>
          <button
            className={'button is-primary is-small'}
            onClick={() => setShowBuyModal(true)}
            disabled={availableEP <= 0}>
            Add Equipment
          </button>
          <button
            className={'button is-small'}
            disabled={reqPoints <= 0}
            onClick={() => setShowConfirmEquipmentDropModal(true)}>
            Make Equipment Drop
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
              onClick={() => setEquipmentProfile(availableEquipment.equipment)}>
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
              onClick={() => setEquipmentProfile(availableEquipment.equipment)}>
              <span className="subtitle is-6">
                {' '}
                {availableEquipment.equipment.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default BaseStash
