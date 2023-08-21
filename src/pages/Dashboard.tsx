import { useEffect, useState } from "react";
import { getDataslates, Dataslates } from "../superbaseClient";
import { Link } from "react-router-dom";
import DataslateCard from "../componants/DataslateCard";

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
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/new-dataslate" className="button">
            Create New Dataslate
          </Link>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <div className="column">
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
