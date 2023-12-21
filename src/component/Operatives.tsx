import { useState } from 'react'
import CasualtyCheckModal from '../modals/CasualtyCheckModal'
import RecoveryTestModal from '../modals/RecoveryTestModal'

const Operatives = () => {
  const [showCasualtyCheckModal, setShowCasualtyCheckModal] = useState(false)
  const [showRecoveryTestModal, setRecoveryTestModal] = useState(false)

  return (
    <>
      <CasualtyCheckModal
        showModal={showCasualtyCheckModal}
        onClose={() => setShowCasualtyCheckModal(false)}
        showRecoveryTestModal={() => setRecoveryTestModal(true)}
      />
      <RecoveryTestModal
        showRecoveryTestModal={showRecoveryTestModal}
        onClose={() => setRecoveryTestModal(false)}
      />
      <div className={'buttons'}>
        <button
          className={'button'}
          onClick={() => setShowCasualtyCheckModal(true)}>
          Casualty Test
        </button>
        <button
          className={'button'}
          onClick={() => setRecoveryTestModal(true)}>
          Recovery Test
        </button>
      </div>
    </>
  )
}

export default Operatives
