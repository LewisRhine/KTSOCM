import BaseInfo from './BaseInfo.tsx'
import BaseStash from './BaseStash.tsx'
import { useState } from 'react'
import BuyAssetModal from '../modals/BuyAssetModal.tsx'

const BaseOfOperations = () => {
  const [showBuyAssetModal, setShowBuyAssetModal] = useState(false)


  return (
    <>
      <BuyAssetModal
        showModal={showBuyAssetModal}
        onClose={() => setShowBuyAssetModal(false)}
        selectedstrategicAssets={[]}
      />
      <div className={'content has-text-centered'}>
        <BaseInfo />
      </div>
        <div className={'columns'}>
          <div className={'column'}>
            <BaseStash />
          </div>
          <div className={'column'}>
            <p className="title">Strategic Assets</p>
            <button
              className={'button is-primary is-small'}
              onClick={() => setShowBuyAssetModal(true)}>
              Acquire Asset
            </button>
            <p>asdasdasd </p>
            <p>asdasdasd </p>
          </div>
      </div>
    </>
  )
}

export default BaseOfOperations
