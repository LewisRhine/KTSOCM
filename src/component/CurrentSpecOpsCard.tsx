import useDataslateStore from '../stores/dataslateStore.ts'
import OperationName from './OperationName.tsx'
import { isStanderSpecOps, SpecOps } from '../data/specOps.ts'

interface Props {
  onClick: () => void
  onAssignClicked: () => void
}

const CurrentSpecOpsCard = (props: Props) => {
  const { onClick, onAssignClicked } = props

  const currentSpecOps = useDataslateStore(
    (state) => state.selectedDataslate?.currentSpecOps,
  )
  const completedSpecOps =
    useDataslateStore((state) => state.selectedDataslate?.completedSpecOps) ??
    []

  if (!currentSpecOps)
    return (
      <a className={'box'} onClick={onAssignClicked}>
        <p className="title is-5">Assign Kill Team to a Spec Ops!</p>
        <SpecOpsLog completedSpecOps={completedSpecOps} />
      </a>
    )

  if (isStanderSpecOps(currentSpecOps)) {
    const { name, operationOne, operationTwo } = currentSpecOps

    return (
      <a className={'box'} onClick={onClick}>
        <p className={'is-size-6 has-text-weight-bold'}>{name}</p>
        {!operationOne.complete && (
          <OperationName operation={operationOne} showCompletion={true} />
        )}
        {operationOne.complete && !operationTwo.complete && (
          <OperationName operation={operationTwo} showCompletion={true} />
        )}
        {operationOne.complete && operationTwo.complete && (
          <p className={'is-size-6 has-text-weight-bold'}>Complete!</p>
        )}
        <SpecOpsLog completedSpecOps={completedSpecOps} />
      </a>
    )
  }

  return
}

interface SpecOpsLogProps {
  completedSpecOps: SpecOps[]
}

const SpecOpsLog = (props: SpecOpsLogProps) => {
  const { completedSpecOps } = props

  return (
    <>
      {completedSpecOps?.map(({ name }, index) => (
        <p
          className={'is-size-6 has-text-weight-bold has-text-grey-lighter'}
          key={index}>
          {name}
        </p>
      ))}
    </>
  )
}

export default CurrentSpecOpsCard
