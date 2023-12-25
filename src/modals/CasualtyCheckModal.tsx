import { useState } from 'react'
import CasualtyCheck from '../component/CasualtyCheck'
import CasualtyCheckPass from '../component/CasualtyCheckPass'
import CasualtyCheckFail from '../component/CasualtyCheckFail'

interface Props {
  showModal: boolean
  showRecoveryTestModal: () => void
  onClose: () => void
}

type ModalState = 'start' | 'pass' | 'fail'

const CasualtyCheckModal = (props: Props) => {
  const { showModal, onClose, showRecoveryTestModal } = props

  const isActive = showModal ? 'is-active' : ''

  const [modalState, setModalState] = useState<ModalState>('start')

  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title"> Casualty Check</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <div className="modal-card-body">
          {modalState === 'start' && <CasualtyCheck />}
          {modalState === 'pass' && <CasualtyCheckPass />}
          {modalState === 'fail' && <CasualtyCheckFail />}
        </div>
        <footer className="modal-card-foot">
          {modalState === 'start' ? (
            <>
              <button
                className="button is-primary"
                onClick={() => {
                  onClose()
                  setModalState('start')
                }}>
                Done
              </button>
              <button
                className="button is-success"
                onClick={() => setModalState('pass')}>
                Passed
              </button>
              <button
                className="button is-danger"
                onClick={() => setModalState('fail')}>
                Failed
              </button>
            </>
          ) : (
            <div className={'buttons'}>
              <button
                className="button is-primary"
                onClick={() => {
                  onClose()
                  setModalState('start')
                }}>
                Done
              </button>
              <button className="button" onClick={() => setModalState('start')}>
                Take Another Casualty Test
              </button>
              <button
                className="button"
                onClick={() => {
                  onClose()
                  setModalState('start')
                  showRecoveryTestModal()
                }}>
                Take Recovery Test
              </button>
            </div>
          )}
        </footer>
      </div>
    </div>
  )
}

export default CasualtyCheckModal
