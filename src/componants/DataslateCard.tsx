import { Dataslate } from "../superbaseClient";

interface DataslateCardProps {
  dataslate: NonNullable<Dataslate>;
  onUpdated(): void;
}

const DataslateCard = (props: DataslateCardProps) => {
  return (
    <a href="http://127.0.0.1:5173/dataslate/{props.dataslate.id}">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={props.dataslate.faction?.faction_cover_image ?? ""}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{props.dataslate.team_name}</p>
          <p className="subtitle is-6">{props.dataslate.faction?.name}</p>
        </div>
        <div className="content">Current Spec Ops: None</div>
      </div>
    </a>
  );
};
