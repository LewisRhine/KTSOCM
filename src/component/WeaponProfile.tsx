import { Weapon } from '../data/equipment.ts'
import useDataslateStore from '../stores/dataslateStore.ts'
import ShapeInjector from './ShapeInjector.tsx'

interface Props {
  weapon: Weapon
  buyMode?: boolean
}

const WeaponProfile = (props: Props) => {
  const { weapon, buyMode } = props
  const {
    type,
    name,
    cost,
    attacks,
    ballisticsSkills,
    normalDamage,
    criticalDamage,
    specialRules,
    criticalHitRules,
    rare,
  } = weapon

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
    <div>
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
              onClick={() => addToStash(weapon)}>
              +
            </button>
            <button
              className="button is-small"
              disabled={noneInStash}
              onClick={() => removeFromStash(weapon)}>
              -
            </button>
            <span className={'is-size-5'}>{` X ${amountInStash}`}</span>
          </div>
        )}
      </div>
      <table className="table is-fullwidth">
        <colgroup>
          <col width="100px" />
          <col width="100px" />
          <col width="200px" />
          <col width="1000px" />
          <col width="500px" />
        </colgroup>
        <thead>
          <tr>
            <th>A</th>
            <th>{type === 'melee' ? 'WS' : 'BS'}</th>
            <th>D</th>
            <th>SP</th>
            <th>!</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>{attacks}</td>
            <td>{`${ballisticsSkills}+`}</td>
            <td>{`${normalDamage}/${criticalDamage}`}</td>
            <td>
              {specialRules.map(({ name }, index) => (
                <span key={index}>
                  <ShapeInjector
                    text={`${name}${
                      index !== specialRules.length - 1 ? ', ' : ''
                    }`}
                  />
                </span>
              ))}
            </td>
            <td>
              {criticalHitRules.map(({ name }, index) => (
                <span key={index}>
                  <ShapeInjector
                    text={`${name}${
                      index !== criticalHitRules.length - 1 ? ', ' : ''
                    }`}
                  />
                </span>
              ))}
            </td>
          </tr>
        </thead>
      </table>
      <br />
    </div>
  )
}

export default WeaponProfile
