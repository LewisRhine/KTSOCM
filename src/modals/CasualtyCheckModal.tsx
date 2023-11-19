import { useState } from 'react'
import CasualtyCheck from '../component/CasualtyCheck'
import CasualtyCheckPass from '../component/CasualtyCheckPass'
import RecoveryTestModal from './RecoveryTestModal'

interface Props {
  showModal: boolean
  recoveryTestModalswitch: () => void
  onClose: () => void
}

type ModalState = 'start' | 'pass' | 'fail'

const CasualtyCheckModal = (props: Props) => {
  const { showModal, onClose } = props

  const isActive = showModal ? 'is-active' : ''

  const [modalState, setModalState] = useState<ModalState>('start')

  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title"> First Roll</p>
        </header>
        <div className="modal-card-body">
          {modalState === 'start' && <CasualtyCheck />}
          {modalState === 'pass' && <CasualtyCheckPass />}
        </div>
        <footer className="modal-card-foot">
          {modalState === 'start' ? (
            <>
              <button className="button" onClick={() => setModalState('pass')}>
                Passed
              </button>
              <button className="button" onClick={() => setModalState('fail')}>
                Failed
              </button>
            </>
          ) : (
            <>
              <button className="button" onClick={() => setModalState('start')}>
                Take Another Casualty Test
              </button>
              <button
                className="button"
                onClick={() => {
                  onClose()
                  setModalState('start')
                  RecoveryTestModal
                }}>
                Take Recovery Test
              </button>
            </>
          )}
          {/* <button
            className={'button is-primary is-small'}
            onClick={() => setshowshowCasualtyCheckSecondRollModal(true)}>
            Failed
          </button> */}
        </footer>
      </div>
    </div>
  )
}

export default CasualtyCheckModal
