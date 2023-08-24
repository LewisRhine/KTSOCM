import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getDataslate, Dataslate } from "../data/dataslate.ts";
import EditDataslate from "../componants/EditDataslate";
import { sessionContext } from "../context/sessionContext";

const Dataslate = () => {
  const session = useContext(sessionContext);
  const { dataslateId } = useParams();
  const [dataslate, setDataslate] = useState<Dataslate | null>(null);
  const [error, setError] = useState(false);
  const [isEditMode, setisEditMode] = useState(false);

  useEffect(() => {
    if (!dataslateId) return;

    const fetchDataslate = async () => {
      const { data, error } = await getDataslate(dataslateId);

      if (error) {
        setError(true);
        return;
      }

      if (data) setDataslate(data);
      setError(false);
    };

    fetchDataslate();
  }, [dataslateId]);

  if (error) return <h1> There was an error loading Dataslate! </h1>;
  if (!dataslate) return <h1> Loading </h1>;
  if (isEditMode)
    return (
      <EditDataslate
        dataslate={dataslate}
        onUpdated={() => setisEditMode(false)}
      />
    );

  return (
    <>
      <div className="navbar-end">
        <div className="navbar-item">
          <button className="button" onClick={() => setisEditMode(true)}>
            Edit
          </button>
        </div>
      </div>
      <div className="container">
        <section className="section">{dataslate.teamName}</section>
        <section className="section">
          <p>Faction: {dataslate.faction.name}</p>
          {dataslate.history && <p>History: {dataslate.history}</p>}
          <p>Notes: {dataslate.notes}</p>
          <p>Quirks: {dataslate.quirks}</p>
          <p>Reqired Points: {dataslate.reqPoints}</p>
          <p>Selectable Keyword: {dataslate.selectableKeyword}</p>
          <p>Special Ops Log: {dataslate.specOpsLog}</p>
        </section>
      </div>
    </>
  );
};

export default Dataslate;
