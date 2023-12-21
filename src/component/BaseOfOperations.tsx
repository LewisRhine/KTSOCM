import BaseInfo from './BaseInfo.tsx'
import BaseStash from './BaseStash.tsx'
import StrategicAssets from './StrategicAssets.tsx'

const BaseOfOperations = () => {
  return (
    <>
      <div className={'content has-text-centered'}>
        <BaseInfo />
      </div>
      <div className={'columns'}>
        <div className={'column'}>
          <BaseStash />
        </div>
        <div className={'column'}>
          <StrategicAssets />
        </div>
      </div>
    </>
  )
}

export default BaseOfOperations
