import { useState } from 'react'
import CasualtyCheckModal from '../modals/CasualtyCheckModal'

const Operatives = () => {
  const [
    showCasualtyCheckModal,
    setShowCasualtyCheckModal,
  ] = useState(false)

  return (
    <>
      <CasualtyCheckModal
        showModal={showCasualtyCheckModal}
        onClose={() => setShowCasualtyCheckModal(false)}
      />
      <div className={'column'}>
        <p className="title">Casulty Test Walkthrough</p>

        <button
          className={'button is-primary is-small'}
          onClick={() => setShowCasualtyCheckModal(true)}>
          Casulty Check
        </button>
      </div>
    </>
  )
}

export default Operatives
