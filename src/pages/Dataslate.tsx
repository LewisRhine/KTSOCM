import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useDataslateStore from '../stores/dataslateStore.ts'
import TeamBackground from '../component/TeamBackground.tsx'
import BaseOfOperations from '../component/BaseOfOperations.tsx'
import Operatives from '../component/Operatives.tsx'
import RequisitionsModal from '../modals/RequisitionsModal.tsx'
import ConfirmModal from '../modals/ConfirmModal.tsx'
import { deleteDataslate } from '../data/dataslate.ts'

const Dataslate = () => {
  const { dataslateId } = useParams()
  const { hash } = useLocation()
  const nav = useNavigate()

  const [showRequisitionsModal, setShowRequisitionsModal] = useState(false)

  const dataslate = useDataslateStore((state) => state.selectedDataslate)
  const loading = useDataslateStore((state) => state.loading)
  const getDataslate = useDataslateStore((state) => state.getDataslate)
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
      <div className={'container'}>
        <section className={'section'}>
          <div className={'columns is-vcentered is-centered'}>
            <div className={'column has-text-centered'}>
              <div>
                <p className="title">{dataslate.teamName}</p>
                <p className="subtitle">{dataslate.faction.name}</p>
              </div>
            </div>
            <div className={'columns is-mobile is-vcentered is-centered'}>
              <div className={'column has-text-centered'}>
                <a onClick={() => setShowRequisitionsModal(true)}>
                  <p>Requisition Points</p>
                  <p className="title is-3">{dataslate.reqPoints}</p>
                </a>
              </div>
            </div>
            <div className={'buttons has-addons is-centered'}>
              <button className="button" onClick={increasePoints}>
                +
              </button>
              <button className="button" onClick={decreasePoints}>
                -
              </button>
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
          console.log('log: ' + deleteDataslate(dataslate))
          setshowDeleteDataslateModal(false)
        }}
        onClose={() => setshowDeleteDataslateModal(false)}
      />
    </>
  )
}

export default Dataslate
