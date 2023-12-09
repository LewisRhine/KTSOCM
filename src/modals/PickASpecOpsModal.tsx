import useDataslateStore from '../stores/dataslateStore.ts'
import { genericSpecOps, isStanderSpecOps } from '../data/specOps.ts'
import SpecOpsProfile from '../component/SpecOpsProfile.tsx'

interface Props {
  showModal: boolean
  onClose: () => void
}

const PickASpecOpsModal = (props: Props) => {
  const { showModal, onClose } = props
  const isActive = showModal ? 'is-active' : ''

  const currentSpecOps = useDataslateStore(
    (state) => state.selectedDataslate?.currentSpecOps,
  )

  if (currentSpecOps) return null

  return (
    <>
      <div className={`modal ${isActive}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Spec Ops</p>
            <button className="delete" onClick={onClose}></button>
          </header>
          <section className="modal-card-body">
            {genericSpecOps.map((specOps, index) => {
              if (isStanderSpecOps(specOps))
                return <SpecOpsProfile specOps={specOps} key={index} />
            })}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-primary" onClick={onClose}>
              Done
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}

export default PickASpecOpsModal
