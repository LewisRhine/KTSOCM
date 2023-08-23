import { Dataslate } from "../data/dataslate.ts";

interface DataslateCardProps {
  dataslate: Dataslate;
}

const DataslateCard = (props: DataslateCardProps) => {
  return (
    <a href={`/dataslate/${props.dataslate.id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={props.dataslate.faction.coverImage ?? ""}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{props.dataslate.teamName}</p>
          <p className="subtitle is-6">{props.dataslate.faction.name}</p>
        </div>
        <div className="card-content">Current Spec Ops: None</div>
      </div>
    </a>
  );
};

export default DataslateCard;
