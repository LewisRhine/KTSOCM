import { Dataslate } from '../data/dataslate.ts'

interface DataslateCardProps {
  dataslate: Dataslate
}

const DataslateCard = (props: DataslateCardProps) => {
  const { id, faction, teamName, currentSpecOps } = props.dataslate

  return (
    <a href={`/dataslate/${id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={faction.coverImage ?? ''} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{teamName}</p>
          <p className="subtitle is-6">{faction.name}</p>
        </div>
        <div className="card-content">
          Current Spec Ops: {!currentSpecOps && 'None'}
          {currentSpecOps && <div className={'is-size-6'}>{currentSpecOps.name}</div>}
        </div>
      </div>
    </a>
  )
}

export default DataslateCard
