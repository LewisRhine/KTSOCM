import RecoveryTest from '../component/RecoveryTest'

interface Props {
  showRecoveryTestModal: boolean
  onClose: () => void
}

const RecoveryTestModal = (props: Props) => {
  const { showRecoveryTestModal, onClose } = props

  const isActive = showRecoveryTestModal ? 'is-active' : ''

  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" onClick={onClose} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title"> Recovery Test</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <RecoveryTest />
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

export default RecoveryTestModal
