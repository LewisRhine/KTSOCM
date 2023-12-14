import { Operation } from '../data/specOps.ts'
import OperationName from './OperationName.tsx'

interface Props {
  operation: Operation
  showCompletion?: boolean
}

const OperationProfile = (props: Props) => {
  const { description, rule } = props.operation

  return (
    <div className={'pb-3'}>
      <OperationName {...props} />
      <p className={'is-size-7 is-italic  pb-2'}>{description}</p>
      <p className={'is-size-6'}>{rule}</p>
    </div>
  )
}

export default OperationProfile
