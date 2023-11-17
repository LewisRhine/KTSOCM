import { useState } from 'react'
import CasualtyCheckFirstRoll from '../modals/CasualtyCheckFirstRoll'

const Operatives = () => {
  const [
    showCasualtyCheckFirstRollModal,
    setshowshowCasualtyCheckFirstRollModal,
  ] = useState(false)
  const [
    showCasualtyCheckSecondRollModal,
    setshowCasualtyCheckSecondRollModal,
  ] = useState(false)

  return (
    <>
      <CasualtyCheckFirstRoll
        showModal={showCasualtyCheckFirstRollModal}
        onClose={() => setshowshowCasualtyCheckFirstRollModal(false)}
      />
      <div className={'column'}>
        <p className="title">Casulty Test Walkthrough</p>

        <button
          className={'button is-primary is-small'}
          onClick={() => setshowshowCasualtyCheckFirstRollModal(true)}>
          Casulty Check
        </button>
      </div>
    </>
  )
}

export default Operatives
