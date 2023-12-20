interface Props {
  showModal: boolean
  message: string
  onConfirm: () => void
  onClose: () => void
}

const ConfirmModal = (props: Props) => {
  const { showModal, message, onConfirm, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  return (
    <div className={`modal ${isActive}`} style={{ zIndex: 50 }}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className={'box has-text-centered'}>
          <div className={'content'}>
            <p className={'title is-4'}>{message}</p>
          </div>
          <div className="buttons is-centered">
            <button className="button is-primary" onClick={onConfirm}>
              Confirm
            </button>
            <button className="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" onClick={onClose} />
    </div>
  )
}

export default ConfirmModal
