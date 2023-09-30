import BaseInfo from './BaseInfo.tsx'
import BaseStash from './BaseStash.tsx'

const BaseOfOperations = () => {
  return (
    <>
      <div className={'content has-text-centered'}>
        <BaseInfo />
      </div>
      <div className={'content'}>
        <BaseStash />
      </div>
    </>
  )
}

export default BaseOfOperations
