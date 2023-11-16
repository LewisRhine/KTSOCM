import { useState } from 'react'
import CasualtyCheckFirstRoll from '../modals/CasualtyCheckFirstRoll'


const Operatives = () => {
  const [
    showCasualtyCheckFirstRollModal,
    setshowshowCasualtyCheckFirstRollModal,
  ] = useState(false)
  

  return (
    <>
    <CasualtyCheckFirstRoll
      showModal={showCasualtyCheckFirstRollModal}
      onClose={() => setshowshowCasualtyCheckFirstRollModal(false)} />
      <div className={'column'}>
        <p className="title">Strategic Assets</p>
        <button
          className={'button is-primary is-small'}
          onClick={() => setshowshowCasualtyCheckFirstRollModal(true)}>
          Casulty Check
        </button>
        </div>
      </>
    )}

export default Operatives
