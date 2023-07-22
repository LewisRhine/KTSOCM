import { useEffect, useState } from "react";
import supabaseClient, { DataSlate } from "../superbaseClient";

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
        return <p key={index}>{dataslate.team_name}</p>;
      })}{" "}
    </>
  );
};
//
export default Dashboard;
