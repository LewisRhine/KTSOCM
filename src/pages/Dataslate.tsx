import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataslate, Dataslate } from "../superbaseClient";

const Dataslate = () => {
  const { dataslateId } = useParams();
  const [dataslate, setDataslate] = useState<Dataslate | null>(null);
  const [error, setError] = useState(false);
  console.log(dataslateId);
  console.log(dataslate);

  useEffect(() => {
    if (!dataslateId) return;
    const fetchDataslate = async () => {
      try {
        const { data: dataslate, error } = await getDataslate(+dataslateId);
        if (error) throw error;
        setDataslate(dataslate);
        setError(false);
      } catch (e: any) {
        setError(true);
      }
    };

    fetchDataslate();
  }, []);
  if (error) return <h1> There was an error loading Dataslate! </h1>;
  if (!dataslate) return <h1> Loading </h1>;
  return (
    <>
      <div className="card-header-title is centered">
        Team Name: {dataslate.team_name}
      </div>
      <div className="has-background-grey-lighter">
        <p>Created at: {dataslate.created_at}</p>
        <p>Faction: {dataslate.faction?.name}</p>
        <p> History: {dataslate.history}</p>
        <p> Notes: {dataslate.notes}</p>
        <p> Quirks: {dataslate.quirks}</p>
        <p>Reqired Points: {dataslate.req_points}</p>
        <p>Selectable Keyword: {dataslate.selectable_keyword}</p>
        <p>Special Ops Log: {dataslate.spec_ops_log}</p>
      </div>
    </>
  );
};

export default Dataslate;
