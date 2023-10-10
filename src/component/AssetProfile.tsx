import { StrategicAssets } from '../data/strategicAssets.ts'

interface Props {
  asset: StrategicAssets
  buyMode?: boolean
}

const StrategicAssetsProfile = (props: Props) => {
  const { asset, buyMode } = props
  const { name, description, rule } = asset

  return (
    <div>
      <div className={'columns'}>
        <div className={'column'}>
          <p className={'title is-5'}>{name}</p>
          <p>{description}</p>
          <p>{rule}</p>
        </div>
      </div>
    </div>
  )
}

export default StrategicAssetsProfile
