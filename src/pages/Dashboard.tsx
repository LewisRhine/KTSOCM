import { useEffect, useState } from "react";
import DataslateCard from "../componants/DataslateCard";
import { Dataslate } from "../data/dataslate.ts";
import { getDataslates } from "../data/dataslate.ts";
import NewDataslate from "../componants/NewDataslate.tsx";

const Dashboard = () => {
  const [dataslates, setDataslates] = useState<Dataslate[] | null>(null);
  const [showNewDataslateModal, setshowNewDataslateModal] = useState(false);

  const showModal = () => {
    setshowNewDataslateModal(true);
  };

  const cancelShowModal = () => {
    setshowNewDataslateModal(false);
  };

  useEffect(() => {
    const fetchDataslates = async () => {
      const { data } = await getDataslates();

      if (!data) return;

      setDataslates(data);
    };

    fetchDataslates();
  }, []);

  return (
    <>
      {showNewDataslateModal && (
        <NewDataslate cancelShowModal={cancelShowModal} />
      )}
      <div className="navbar-end">
        <div className="navbar-item">
          <button className="button" onClick={showModal}>
            Create New Dataslate
          </button>
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
