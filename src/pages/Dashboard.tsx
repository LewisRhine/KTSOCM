import { useEffect, useState } from "react";
import supabaseClient, { DataSlate } from "../superbaseClient";
import "./Dashboard.css";

const Dashboard = () => {
  const [dataslates, setDataslates] = useState<DataSlate[] | null>(null);

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

    fetchDataslates();
  }, []);
  return (
    <>
      {" "}
      {dataslates?.map((dataslate, index) => {
        return (
          <div>
            <h1 className="box" key={index}>
              {" "}
              Team Name: {dataslate.team_name}
            </h1>
            <p key={index}>Created at: {dataslate.created_at}</p>
            <p key={index}>Faction: {dataslate.faction}</p>
            <p key={index}>History: {dataslate.history}</p>
            <p key={index}>Notes: {dataslate.notes}</p>
            <p key={index}>Quirks: {dataslate.quirks}</p>
            <p key={index}>Reqired Points: {dataslate.req_points}</p>
            <p key={index}>
              Selectable Keyword: {dataslate.selectable_keyword}
            </p>
            <p key={index}>Special Ops Log: {dataslate.spec_ops_log}</p>
          </div>
        );
      })}{" "}
    </>
  );
};
//
export default Dashboard;
