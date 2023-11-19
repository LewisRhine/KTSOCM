import { useState } from 'react'

interface Props {
  showModal: boolean
  onClose: () => void
}

const RecoveryTestModal = (props: Props) => {
  const { showModal, onClose } = props
  const isActive = showModal ? 'is-active' : ''

  const [modalState, setModalState] = useState(false)

  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" />
      
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title"> Recovery Test</p>
        </header>
        <div className="modal-card-body">Recovery Test</div>{' '}
      </div>
      <footer className="modal-card-foot">
      </footer>
    </div>
  )
}

export default RecoveryTestModal
