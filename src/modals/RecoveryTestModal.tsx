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
        </header>
        <div className="modal-card-body">
          <RecoveryTest />
          <div className={'box'}></div>
          <button className="button" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecoveryTestModal
