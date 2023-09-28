import { Gear } from '../data/equipment.ts'
import useEquipmentShopStore from '../stores/equipmentShopStore.ts'

interface Props {
  gear: Gear
  buyMode?: boolean
}

const GearProfile = (props: Props) => {
  const { gear, buyMode } = props
  const { name, cost, description, ability } = gear

  const availableEP = useEquipmentShopStore((state) => state.availableEP)
  const amountInStash = useEquipmentShopStore((state) =>
    state.getAmountInStash(gear),
  )

  const addToStash = useEquipmentShopStore((state) => state.addToStash)
  const removeFromStash = useEquipmentShopStore(
    (state) => state.removeFromStash,
  )

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
              disabled={cantAfford}
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
