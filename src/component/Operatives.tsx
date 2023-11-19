import { useState } from 'react'
import CasualtyCheckModal from '../modals/CasualtyCheckModal'
import RecoveryTestModal from '../modals/RecoveryTestModal'

const Operatives = () => {
  const [showCasualtyCheckModal, setShowCasualtyCheckModal] = useState(false)

  const [showRecoveryTestModal, setRecoveryTestModal] = useState(false)

  const RecoveryTestModalswitch = () => {
    setRecoveryTestModal(true)
  }

  return (
    <>
      <CasualtyCheckModal
        showModal={showCasualtyCheckModal}
        onClose={() => setShowCasualtyCheckModal(false)}
        recoveryTestModalswitch={RecoveryTestModalswitch}
      />
      <div className={'column'}>
        <p className="title">Casulty Test Walkthrough</p>

        <button
          className={'button is-primary is-small'}
          onClick={() => setShowCasualtyCheckModal(true)}>
          Casulty Check
        </button>
      </div>
      <RecoveryTestModal
        showModal={showRecoveryTestModal}
        onClose={() => setRecoveryTestModal(false)}
      />
    </>
  )
}

export default Operatives
