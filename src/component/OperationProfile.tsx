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
      <p className={'is-italic is-family-secondary pb-2'}>{description}</p>
      <p className={'is-family-secondary has-text-weight-semibold'}>{rule}</p>
    </div>
  )
}

export default OperationProfile
