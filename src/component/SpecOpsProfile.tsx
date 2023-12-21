import { StanderSpecOps } from '../data/specOps.ts'
import OperationProfile from './OperationProfile.tsx'
import ConfirmModal from '../modals/ConfirmModal.tsx'
import { useState } from 'react'
import useDataslateStore from '../stores/dataslateStore.ts'

interface Props {
  specOps: StanderSpecOps
  isAssigned?: boolean
  showCompletion?: boolean
}

const SpecOpsProfile = (props: Props) => {
  const { specOps, isAssigned, showCompletion } = props
  const {
    name,
    description,
    operationOne,
    operationTwo,
    commendations,
    bonus,
  } = specOps

  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const assignSpecOps = useDataslateStore((state) => state.assignSpecOps)
  // Off for beta testing
  // const completedSpecOps =
  //   useDataslateStore((state) => state.selectedDataslate?.completedSpecOps) ??
  //   []
  const checkCommendationCurrentSpecOps = useDataslateStore(
    (state) => state.checkCommendationCurrentSpecOps,
  )

  const isComplete = operationOne.complete && operationTwo.complete
  // Off for beta testing
  // todo this needs to be only if last 3
  const isInLog = false
  // const isInLog = !!completedSpecOps.find(
  //   (completed) => completed.name === name,
  // )

  const onConfirm = () => {
    setShowConfirmModal(false)
    assignSpecOps(specOps)
  }

  return (
    <>
      <ConfirmModal
        showModal={showConfirmModal}
        message={`Assign team to ${name}?`}
        onConfirm={onConfirm}
        onClose={() => setShowConfirmModal(false)}
      />
      <div className={'pb-6'}>
        <div className={'is-flex is-justify-content-space-between'}>
          <p className={'title is-5'}>{name}</p>
          {!isAssigned && (
            <button
              className={'button is-small'}
              disabled={isInLog}
              onClick={() => setShowConfirmModal(true)}>
              Assign
            </button>
          )}
        </div>
        <p className={'is-italic is-family-secondary pb-3'}>{description}</p>
        <OperationProfile
          operation={operationOne}
          showCompletion={showCompletion}
        />
        <OperationProfile
          operation={operationTwo}
          showCompletion={showCompletion}
        />
        <p className={'is-size-6 has-text-weight-bold'}>Commendation</p>
        <ul className={'is-family-secondary is-size-6 pl-5'} style={{ listStyleType: 'disc' }}>
          {commendations.map(({ reward, claimed }, index) => (
            <li key={index}>
              {isAssigned && isComplete && (
                <input
                  type="checkbox"
                  checked={claimed}
                  onChange={() => checkCommendationCurrentSpecOps(index)}
                />
              )}{' '}
              {reward}
            </li>
          ))}
        </ul>
        {bonus && (
          <>
            <p className={'title is-5 pt-2'}>Spec Ops Bonus</p>
            <p className={'subtitle is-6'}>{bonus}</p>
          </>
        )}
      </div>
    </>
  )
}

export default SpecOpsProfile
