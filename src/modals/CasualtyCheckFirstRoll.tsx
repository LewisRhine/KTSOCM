interface Props {
  showModal: boolean
  onClose: () => void
}

const CasualtyCheckFirstRoll = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title"> put rules here </p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <footer className="modal-card-foot">
          <button className="button" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  )
}

export default CasualtyCheckFirstRoll
