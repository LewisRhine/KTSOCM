import { useEffect, useState } from 'react'
import DataslateCard from '../component/DataslateCard.tsx'
import NewDataslateModal from '../modals/NewDataslateModal.tsx'
import useDataslateStore from '../stores/dataslateStore.ts'
import Navbar from '../component/Navbar.tsx'

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
      <Navbar>
        <a className="navbar-item" onClick={showModal}>
          Create New Dataslate
        </a>
      </Navbar>
      <NewDataslateModal
        showModal={showNewDataslateModal}
        onClose={cancelShowModal}
      />
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
