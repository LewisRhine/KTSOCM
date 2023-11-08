import useDataslateStore from '../stores/dataslateStore.ts'
import { generalRequisitions } from '../data/requisition.ts'
import RequisitionProfile from '../component/RequisitionProfile.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
}

const RequisitionsModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const reqPoints =
    useDataslateStore((state) => state.selectedDataslate?.reqPoints) ?? 0
  const factionRequisitions =
    useDataslateStore(
      (state) => state.selectedDataslate?.faction.requisitions,
    ) ?? []

  const availableRequisitions = [...generalRequisitions, ...factionRequisitions]

  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Request Requisition {reqPoints}</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          {availableRequisitions?.map((requisition) => (
            <RequisitionProfile requisition={requisition} />
          ))}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={onClose}>
            Done
          </button>
        </footer>
      </div>
    </div>
  )
}

export default RequisitionsModal
