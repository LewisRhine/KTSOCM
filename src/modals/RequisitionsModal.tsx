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
  const factionName =
    useDataslateStore((state) => state.selectedDataslate?.faction.name) ?? ''

  const increasePoints = useDataslateStore((state) => state.increasePoints)
  const decreasePoints = useDataslateStore((state) => state.decreasePoints)

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Request Requisition {reqPoints}</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <p className="notification is-primary title is-4">
            {factionName} Requisitions
          </p>

          {factionRequisitions?.map((requisition, index) => (
            <RequisitionProfile key={index} requisition={requisition} />
          ))}

          <p className="notification is-primary title is-4">
            General Requisitions
          </p>

          {generalRequisitions?.map((requisition, index) => (
            <RequisitionProfile key={index} requisition={requisition} />
          ))}
        </section>
        <footer className="modal-card-foot">
          <div className={'buttons'}>
            <button className="button is-primary" onClick={onClose}>
              Done
            </button>
            <button className="button" onClick={increasePoints}>
              +
            </button>
            <button className="button" onClick={decreasePoints}>
              -
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default RequisitionsModal
