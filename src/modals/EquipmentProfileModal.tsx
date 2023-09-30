import { Equipment, isGear, isWeapon } from '../data/equipment.ts'
import WeaponProfile from '../component/WeaponProfile.tsx'
import GearProfile from '../component/GearProfile.tsx'

interface Props {
  equipment?: Equipment
  onClose: () => void
}

const EquipmentProfileModal = (props: Props) => {
  const { equipment, onClose } = props

  const isActive = equipment ? 'is-active' : ''

  if (!equipment) return null
  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" onClick={onClose} />
      <div className="modal-content">
        <div className={'box'}>
          {isWeapon(equipment) && <WeaponProfile weapon={equipment} />}
          {isGear(equipment) && <GearProfile gear={equipment} />}
        </div>
      </div>
      <button className="modal-close is-large" onClick={onClose} />
    </div>
  )
}

export default EquipmentProfileModal
