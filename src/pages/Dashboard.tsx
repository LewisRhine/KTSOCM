import { useEffect, useState } from "react";
import supabaseClient, { DataSlate, Faction } from "../superbaseClient";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [dataslates, setDataslates] = useState<DataSlate[] | null>(null);
  const [factions, setFactions] = useState<Faction[] | null>(null);

  useEffect(() => {
    const fetchDataslates = async () => {
      try {
        const { data: dataslates, error } = await supabaseClient
          .from("dataslate")
          .select("*");
        if (error) throw error;
        setDataslates(dataslates);
      } catch (e: any) {
        console.log(e.Message);
      }
    };

    const fetchFactions = async () => {
      try {
        const { data: factions, error } = await supabaseClient
          .from("factions")
          .select("*");
        if (error) throw error;
        setFactions(factions);
      } catch (e: any) {
        console.log(e.Message);
      }
    };

    fetchFactions();
    fetchDataslates();
  }, []);
  return (
    <>
      {" "}
      {dataslates?.map((dataslate, index) => {
        const factionName = (factions: Faction) => {
          return factions.id === dataslate.faction;
        };
        return (
          <div key={index} className="card">
            <div className="card-header-title is centered">
              {" "}
              Team Name: {dataslate.team_name}
            </div>
            <div className="has-background-grey-lighter">
              <p>Created at: {dataslate.created_at}</p>
              <p>Faction: {factions?.find(factionName)?.name}</p>
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
