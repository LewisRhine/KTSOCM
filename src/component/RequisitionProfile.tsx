import { Requisition } from '../data/requisition.ts'

interface Props {
  requisition: Requisition
}

const RequisitionProfile = (props: Props) => {
  const { requisition } = props
  const { name, cost, description, rule } = requisition

  return (
    <>
      <div className={'title is-5'}>
        {name} {cost}RP
      </div>
      <div className={'subtitle is-6 is-italic'}>{description}</div>
      <div>{rule}</div>
      <br />
    </>
  )
}

export default RequisitionProfile
