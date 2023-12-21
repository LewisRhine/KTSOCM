import useDataslateStore from '../stores/dataslateStore.ts'
import {
  genericMeleeRareEquipment,
  genericRangeRareEquipment,
  isGear,
  isWeapon,
} from '../data/equipment.ts'
import WeaponProfile from '../component/WeaponProfile.tsx'
import GearProfile from '../component/GearProfile.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
}

const GetRareEquipmentModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const factionRareEquipment =
    useDataslateStore(
      (state) => state.selectedDataslate?.faction.rareEquipment,
    ) ?? []
  const factionName =
    useDataslateStore((state) => state.selectedDataslate?.faction.name) ?? ''

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Rare Equipment</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <p className="notification is-primary title is-4">{factionName} Rare Equipment</p>
          {factionRareEquipment?.map((equipment, index) => {
            if (isWeapon(equipment))
              return <WeaponProfile key={index} weapon={equipment} buyMode />
            if (isGear(equipment))
              return <GearProfile key={index} gear={equipment} buyMode />
          })}

          <p className="notification is-primary title is-4">General Ranger Rare Equipment</p>
          {genericRangeRareEquipment?.map((equipment, index) => {
            if (isWeapon(equipment))
              return <WeaponProfile key={index} weapon={equipment} buyMode />
            if (isGear(equipment))
              return <GearProfile key={index} gear={equipment} buyMode />
          })}

          <p className="notification is-primary title is-4">General Melee Rare Equipment</p>
          {genericMeleeRareEquipment?.map((equipment, index) => {
            if (isWeapon(equipment))
              return <WeaponProfile key={index} weapon={equipment} buyMode />
            if (isGear(equipment))
              return <GearProfile key={index} gear={equipment} buyMode />
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

export default GetRareEquipmentModal
