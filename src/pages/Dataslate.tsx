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
// import { deleteDataslate } from '../data/dataslate.ts'
import PickASpecOpsModal from '../modals/PickASpecOpsModal.tsx'

const Dataslate = () => {
  const { dataslateId } = useParams()
  const { hash } = useLocation()
  const nav = useNavigate()

  const [showRequisitionsModal, setShowRequisitionsModal] = useState(false)

  const dataslate = useDataslateStore((state) => state.selectedDataslate)
  const loading = useDataslateStore((state) => state.loading)
  const getDataslate = useDataslateStore((state) => state.getDataslate)
  const deleteDataslate = useDataslateStore((state) => state.deleteDataslate)
  const increasePoints = useDataslateStore((state) => state.increasePoints)
  const decreasePoints = useDataslateStore((state) => state.decreasePoints)
  const [showDeleteDataslateModal, setshowDeleteDataslateModal] =
    useState(false)

  useEffect(() => {
    getDataslate(dataslateId ?? '')
  }, [dataslateId])

  useEffect(() => {
    if (!hash) nav('#operatives')
  }, [])

  const [showSpecOpsModal, setShowSpecOpsModal] = useState(false)
  const [showPickSpecOpsModal, setShowPickSpecOpsModal] = useState(false)

  if (!dataslate || loading) return <h1> Loading </h1>

  return (
    <>
      <button
        className={'button is-small'}
        onClick={() => setshowDeleteDataslateModal(true)}>
        Delete Dataslate
      </button>

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
              <div className={'box'}>
                <div className={'columns is-mobile is-vcentered is-centered'}>
                  <div className={'column has-text-centered'}>
                    <a onClick={() => setShowRequisitionsModal(true)}>
                      <p>Requisition Points</p>
                      <p className="title is-3">{dataslate.reqPoints}</p>
                    </a>
                  </div>
                </div>
                <div className={'buttons  has-addons is-centered'}>
                  <button className="button" onClick={increasePoints}>
                    +
                  </button>
                  <button className="button" onClick={decreasePoints}>
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="tabs is-medium is-centered">
          <ul>
            <li className={`${hash === '#operatives' ? 'is-active' : ''}`}>
              <a href={'#operatives'}>Operatives</a>
            </li>
            <li className={`${hash === '#base' ? 'is-active' : ''}`}>
              <a href={'#base'}>Base of Operations</a>
            </li>
            <li className={`${hash === '#background' ? 'is-active' : ''}`}>
              <a href={'#background'}>Background</a>
            </li>
          </ul>
        </div>
        <section className={'section'}>
          {hash === '#operatives' && <Operatives />}
          {hash === '#base' && <BaseOfOperations />}
          {hash === '#background' && <TeamBackground />}
        </section>
      </div>
      <ConfirmModal
        showModal={showDeleteDataslateModal}
        message={'Are you sure you want to delete Dataslate'}
        onConfirm={() => {
          deleteDataslate(dataslate.id)
          setshowDeleteDataslateModal(false)
        }}
        onClose={() => setshowDeleteDataslateModal(false)}
      />
    </>
  )
}

export default Dataslate
