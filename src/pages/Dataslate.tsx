import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useDataslateStore from '../stores/dataslateStore.ts'
import TeamBackground from '../component/TeamBackground.tsx'
import BaseOfOperations from '../component/BaseOfOperations.tsx'
import SpecOpsModal from '../modals/SpecOpsModal.tsx'
import CurrentSpecOpsCard from '../component/CurrentSpecOpsCard.tsx'
import Operatives from '../component/Operatives.tsx'
import RequisitionsModal from '../modals/RequisitionsModal.tsx'
import ConfirmModal from '../modals/ConfirmModal.tsx'
import PickASpecOpsModal from '../modals/PickASpecOpsModal.tsx'
import Navbar from '../component/Navbar.tsx'

const Dataslate = () => {
  const { dataslateId } = useParams()
  const { hash } = useLocation()
  const nav = useNavigate()

  const [showRequisitionsModal, setShowRequisitionsModal] = useState(false)

  const dataslate = useDataslateStore((state) => state.selectedDataslate)
  const loading = useDataslateStore((state) => state.loading)
  const getDataslate = useDataslateStore((state) => state.getDataslate)
  const deleteDataslate = useDataslateStore((state) => state.deleteDataslate)
  const [showDeleteDataslateModal, setshowDeleteDataslateModal] =
    useState(false)

  useEffect(() => {
    getDataslate(dataslateId ?? '')
  }, [dataslateId])

  useEffect(() => {
    if (!hash) nav('#base')
  }, [])

  const [showSpecOpsModal, setShowSpecOpsModal] = useState(false)
  const [showPickSpecOpsModal, setShowPickSpecOpsModal] = useState(false)

  if (!dataslate || loading) return <h1> Loading </h1>

  return (
    <>
      <Navbar>
        <a
          className="navbar-item"
          onClick={() => setshowDeleteDataslateModal(true)}>
          Delete Dataslate
        </a>
      </Navbar>

      <RequisitionsModal
        showModal={showRequisitionsModal}
        onClose={() => setShowRequisitionsModal(false)}
      />
      <SpecOpsModal
        showModal={showSpecOpsModal}
        onClose={() => setShowSpecOpsModal(false)}
      />
      <PickASpecOpsModal
        showModal={showPickSpecOpsModal}
        onClose={() => setShowPickSpecOpsModal(false)}
      />
      <div className={'container'}>
        <section className={'section'}>
          <div className={'columns is-5'}>
            <div className={'column has-text-centered'}>
              <div>
                <p className="title">{dataslate.teamName}</p>
                <p className="subtitle">{dataslate.faction.name}</p>
              </div>
            </div>
            <div className={'column has-text-centered'}>
              <CurrentSpecOpsCard
                onClick={() => setShowSpecOpsModal(true)}
                onAssignClicked={() => setShowPickSpecOpsModal(true)}
              />
            </div>
            <div className={'column is-2'}>
              <a
                className={'box'}
                onClick={() => setShowRequisitionsModal(true)}>
                <div className={'has-text-centered'}>
                  <p className={'has-text-weight-bold'}>Requisition Points</p>
                  <p className="is-size-3">{dataslate.reqPoints}</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <div className="tabs is-medium is-centered">
          <ul>
            <li className={`${hash === '#operatives' ? 'is-active' : ''}`}>
              <a onClick={() => nav('#operatives')}>Operatives</a>
            </li>
            <li className={`${hash === '#base' ? 'is-active' : ''}`}>
              <a onClick={() => nav('#base')}>Base of Operations</a>
            </li>
            <li className={`${hash === '#background' ? 'is-active' : ''}`}>
              <a onClick={() => nav('#background')}>Background</a>
            </li>
          </ul>
        </div>
        <div>
          {hash === '#operatives' && <Operatives />}
          {hash === '#base' && <BaseOfOperations />}
          {hash === '#background' && <TeamBackground />}
        </div>
      </div>
      <ConfirmModal
        showModal={showDeleteDataslateModal}
        message={'Are you sure you want to delete Dataslate'}
        onConfirm={() => {
          deleteDataslate(dataslate)
          setshowDeleteDataslateModal(false)
        }}
        onClose={() => setshowDeleteDataslateModal(false)}
      />
    </>
  )
}

export default Dataslate
