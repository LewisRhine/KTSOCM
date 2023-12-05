import { Requisition } from '../data/requisition.ts'
import useDataslateStore from '../stores/dataslateStore.ts'

interface Props {
  requisition: Requisition
}

const RequisitionProfile = (props: Props) => {
  const { requisition } = props
  const { name, cost, description, rule } = requisition

  const reqPoints =
    useDataslateStore((state) => state.selectedDataslate?.reqPoints) ?? 0
  const takeRequisition = useDataslateStore((state) => state.takeRequisition)

  return (
    <>
      <div className={'columns'}>
        <div className={'column'}>
          <div className={'title is-5'}>
            {name} {cost}RP
          </div>
        </div>
        <div className={'column is-3'}>
          <button
            className="button is-small"
            onClick={() => takeRequisition(requisition)}
            disabled={reqPoints <= 0}>
            Take
          </button>
        </div>
      </div>

      <div className={'subtitle is-6 is-italic'}>{description}</div>
      <div>{rule}</div>
      <br />
    </>
  )
}

export default RequisitionProfile
