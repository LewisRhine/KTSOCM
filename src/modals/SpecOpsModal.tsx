import { useState } from 'react'
import useDataslateStore from '../stores/dataslateStore.ts'
import ConfirmModal from './ConfirmModal.tsx'
import SpecOpsProfile from '../component/SpecOpsProfile.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
}

const SpecOpsModal = (props: Props) => {
  const { showModal, onClose } = props
  const isActive = showModal ? 'is-active' : ''

  const [showAbandonConfirmModal, setShowAbandonConfirmModal] = useState(false)
  const [showCompleteConfirmModal, setShowCompleteConfirmModal] =
    useState(false)

  const currentSpecOps = useDataslateStore(
    (state) => state.selectedDataslate?.currentSpecOps,
  )
  const progressCurrentSpecOps = useDataslateStore(
    (state) => state.progressCurrentSpecOps,
  )
  const degreesCurrentSpecOps = useDataslateStore(
    (state) => state.degreesCurrentSpecOps,
  )
  const abandonCurrentSpecOps = useDataslateStore(
    (state) => state.abandonCurrentSpecOps,
  )
  const completeCurrentSpecOps = useDataslateStore(
    (state) => state.completeCurrentSpecOps,
  )

  if (!currentSpecOps) {
    onClose()

    return null
  }

  const { name, operationOne, operationTwo } = currentSpecOps
  const isComplete = operationOne.complete && operationTwo.complete

  return (
    <>
      <ConfirmModal
        showModal={showAbandonConfirmModal}
        message={`Are you sure you want to abandon ${name}?`}
        onConfirm={() => {
          setShowAbandonConfirmModal(false)
          abandonCurrentSpecOps()
          onClose()
        }}
        onClose={() => setShowAbandonConfirmModal(false)}
      />
      <ConfirmModal
        showModal={showCompleteConfirmModal}
        message={`Are you sure you want to complete ${name}?`}
        onConfirm={() => {
          setShowCompleteConfirmModal(false)
          completeCurrentSpecOps()
          onClose()
        }}
        onClose={() => setShowCompleteConfirmModal(false)}
      />
      <div className={`modal ${isActive}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{name}</p>
            <button className="delete" onClick={onClose} />
          </header>
          <section className="modal-card-body">
            <SpecOpsProfile
              specOps={currentSpecOps}
              isAssigned={true}
              showCompletion={true}
            />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-primary" onClick={onClose}>
              Close
            </button>
            <button className="button" onClick={progressCurrentSpecOps}>
              +
            </button>
            <button className="button" onClick={degreesCurrentSpecOps}>
              -
            </button>
            <button
              className="button is-danger"
              onClick={() => setShowAbandonConfirmModal(true)}>
              Abandon
            </button>
            {isComplete && (
              <button
                className="button"
                onClick={() => setShowCompleteConfirmModal(true)}>
                Compete Spec Op
              </button>
            )}
          </footer>
        </div>
      </div>
    </>
  )
}

export default SpecOpsModal
