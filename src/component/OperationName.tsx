import { isOperationOne, Operation } from '../data/specOps.ts'

interface Props {
  operation: Operation
  showCompletion?: boolean
}

const OperationName = (props: Props) => {
  const { operation, showCompletion } = props
  const { name, complete } = operation

  if (isOperationOne(operation)) {
    const { gamesCompleted, gamesNeededToCompleted } = operation

    if (showCompletion) {
      return (
        <p className={'is-size-6 has-text-weight-bold'}>
          Operation 1: {name}{' '}
          {complete
            ? ' Complete!'
            : `${gamesCompleted}/${gamesNeededToCompleted}`}
        </p>
      )
    }

    return (
      <p className={'is-size-6 has-text-weight-bold'}>Operation 1: {name} </p>
    )
  }

  return (
    <p className={'is-size-6 has-text-weight-bold'}>
      Operation 2: {name}
      {props.showCompletion && complete ? ' Complete!' : ''}
    </p>
  )
}

export default OperationName