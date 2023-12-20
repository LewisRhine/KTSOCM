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
  const availableEP =
    useDataslateStore(
      (state) => state.selectedDataslate?.baseOfOperations.stash.availableEP,
    ) ?? 0
  const reqPoints = useDataslateStore(
    (state) => state.selectedDataslate!.reqPoints,
  )
  const equipmentDrop = useDataslateStore((state) => state.equipmentDrop)
  const undoEquipmentDrop = useDataslateStore(
    (state) => state.undoEquipmentDrop,
  )

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Available EP {availableEP}</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <div className={'buttons'}></div>
          {equipment?.map((equipment, index) => {
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
          <button
            className={'button'}
            disabled={reqPoints <= 0}
            onClick={equipmentDrop}>
            Make Equipment Drop
          </button>
          <button
            className={'button'}
            disabled={availableEP < 5}
            onClick={undoEquipmentDrop}>
            Undo Equipment Drop
          </button>
        </footer>
      </div>
    </div>
  )
}

export default BuyEquipmentModal
