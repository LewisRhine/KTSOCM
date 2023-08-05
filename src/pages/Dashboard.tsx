import { useEffect, useState } from "react";
import { getDataslates, Dataslates } from "../superbaseClient";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [dataslates, setDataslates] = useState<Dataslates | null>(null);

  useEffect(() => {
    const fetchDataslates = async () => {
      try {
        const { data: dataslates, error } = await getDataslates();
        if (error) throw error;
        setDataslates(dataslates);
      } catch (e: any) {
        console.log(e.Message);
      }
    };

    fetchDataslates();
  }, []);
  return (
    <>
      {" "}
      {dataslates?.map((dataslate, index) => {
        return (
          <div key={index} className="card">
            <div className="card-header-title is centered">
              {" "}
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
          </div>
        );
      })}{" "}
      <Link to="/new-dataslate">
        <button>Create New Dataslate</button>
      </Link>
    </>
  );
};
//
export default Dashboard;
