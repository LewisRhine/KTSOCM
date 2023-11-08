import BaseInfo from './BaseInfo.tsx'
import BaseStash from './BaseStash.tsx'

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
            <p className="title">Strategic Assets</p>
            <p>asdasdasd </p>
            <p>asdasdasd </p>
          </div>
      </div>
    </>
  )
}

export default BaseOfOperations
