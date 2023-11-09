import useDataslateStore from '../stores/dataslateStore.ts'
import { isGear, isWeapon } from '../data/equipment.ts'
import WeaponProfile from '../component/WeaponProfile.tsx'
import GearProfile from '../component/GearProfile.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
}

const BuyEquipmentModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const equipment = useDataslateStore(
    (state) => state.selectedDataslate?.faction.equipment,
  )
  const availableEP = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.stash.availableEP,
  )

  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Available EP {availableEP}</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          {equipment?.map((equipment, index) => {
            if (isWeapon(equipment))
              return <WeaponProfile key={index} weapon={equipment} buyMode />
            if (isGear(equipment))
              return <GearProfile gear={equipment} buyMode />
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

export default BuyEquipmentModal
