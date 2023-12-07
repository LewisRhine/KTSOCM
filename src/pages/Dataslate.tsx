import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useDataslateStore from '../stores/dataslateStore.ts'
import TeamBackground from '../component/TeamBackground.tsx'
import BaseOfOperations from '../component/BaseOfOperations.tsx'
import SpecOpsModal from '../modals/SpecOpsModal.tsx'
import CurrentSpecOpsCard from '../component/CurrentSpecOpsCard.tsx'
import Operatives from '../component/Operatives.tsx'
import PickASpecOpsModal from '../modals/PickASpecOpsModal.tsx'

const Dataslate = () => {
  const { dataslateId } = useParams()
  const { hash } = useLocation()
  const nav = useNavigate()

  const dataslate = useDataslateStore((state) => state.selectedDataslate)
  const loading = useDataslateStore((state) => state.loading)
  const getDataslate = useDataslateStore((state) => state.getDataslate)
  const increasePoints = useDataslateStore((state) => state.increasePoints)
  const decreasePoints = useDataslateStore((state) => state.decreasePoints)

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
                    <p>Requisition Points</p>
                    <p className="title is-3">{dataslate.reqPoints}</p>
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
    </>
  )
}

export default Dataslate
