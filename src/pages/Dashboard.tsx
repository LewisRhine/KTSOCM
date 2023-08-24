import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataslateCard from "../componants/DataslateCard";
import { Dataslate } from "../data/dataslate.ts";
import { getDataslates } from "../data/dataslate.ts";

const Dashboard = () => {
  const [dataslates, setDataslates] = useState<Dataslate[] | null>(null);

  useEffect(() => {
    const fetchDataslates = async () => {
      const {data} = await getDataslates();

      if (!data) return;

      setDataslates(data);
    };

    fetchDataslates();
  }, []);

  return (
    <>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/new-dataslate" className="button">
            Create New Dataslate
          </Link>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            {dataslates?.map((dataslate, index) => {
              return (
                <div key={index} className="column">
                  <DataslateCard dataslate={dataslate} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
//
export default Dashboard;
