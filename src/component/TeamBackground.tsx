import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dataslate, getDataslate } from "../data/dataslate.ts";

// const [isEditMode, setisEditMode] = useState(false);
const TeamBackground = () => {
  const { dataslateId } = useParams();
  const [dataslate, setDataslate] = useState<Dataslate | null>(null);
  const [error, setError] = useState(false);

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

  return (
    <>
      {/* <div className="navbar-end">
        <div className="navbar-item">
          <button className="button" onClick={() => setisEditMode(true)}>
            Edit
          </button>
        </div>
      </div> */}

      <section className="section is-medium">
        <h1 className="title">History</h1>
        <h2 className="subtitle">
          {dataslate?.history ? dataslate.history : "None"}
        </h2>
      </section>
      <section className="section is-medium">
        <h1 className="title">Quirks</h1>
        <h2 className="subtitle">
          {dataslate?.quirks ? dataslate.quirks : "None"}
        </h2>
      </section>

      <section className="section is-medium">
        <h1 className="title">Notes</h1>
        <h2 className="subtitle">
          {dataslate?.notes ? dataslate.notes : "None"}
        </h2>
      </section>
    </>
  );
};

export default TeamBackground;
