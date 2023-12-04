import { Gear } from '../data/equipment.ts'
import useDataslateStore from '../stores/dataslateStore.ts'

interface Props {
  gear: Gear
  buyMode?: boolean
}

const GearProfile = (props: Props) => {
  const { gear, buyMode } = props
  const { name, cost, description, ability, rare } = gear

  const availableEP =
    useDataslateStore(
      (state) => state.selectedDataslate?.baseOfOperations.stash.availableEP,
    ) ?? 0
  const availableEquipment =
    useDataslateStore(
      (state) =>
        state.selectedDataslate?.baseOfOperations.stash.availableEquipment,
    ) ?? []
  const amountInStash = availableEquipment.filter(
    ({ equipment }) => equipment.name === name,
  ).length

  const addToStash = useDataslateStore((state) => state.addToStash)
  const removeFromStash = useDataslateStore((state) => state.removeFromStash)

  const cantAfford = availableEP < cost
  const noneInStash = amountInStash <= 0

  return (
    <>
      <div className={'columns'}>
        <div className={'column'}>
          <p className={'title is-5'}>
            {name} {cost}EP
          </p>
        </div>
        {buyMode && (
          <div className={'column is-3'}>
            <button
              className="button is-small"
              disabled={rare ? !noneInStash : cantAfford}
              onClick={() => addToStash(gear)}>
              +
            </button>
            <button
              className="button is-small"
              disabled={noneInStash}
              onClick={() => removeFromStash(gear)}>
              -
            </button>
            <span className={'title is-6'}>{` X ${amountInStash}`}</span>
          </div>
        )}
      </div>
      <div className={'subtitle is-6'}>{description}</div>
      <div>{ability}</div>
      <br />
    </>
  )
}

export default GearProfile
