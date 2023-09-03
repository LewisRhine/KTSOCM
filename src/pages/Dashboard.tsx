import { useEffect, useState } from 'react'
import DataslateCard from '../component/DataslateCard.tsx'
import NewDataslate from '../component/NewDataslate.tsx'
import useDataslateStore from '../stores/dataslateStore.ts'

const Dashboard = () => {
  const [showNewDataslateModal, setshowNewDataslateModal] = useState(false)

  const dataslates = useDataslateStore((state) => state.dataslates)
  const gatDataslates = useDataslateStore((state) => state.getDataslates)

  const showModal = () => {
    setshowNewDataslateModal(true)
  }

  const cancelShowModal = () => {
    setshowNewDataslateModal(false)
  }

  useEffect(() => {
    gatDataslates()
  }, [])

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
          <div className="columns is-multiline">
            {dataslates?.map((dataslate, index) => {
              return (
                <div key={index} className="column is-one-quarter">
                  <DataslateCard dataslate={dataslate} />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}
//
export default Dashboard
