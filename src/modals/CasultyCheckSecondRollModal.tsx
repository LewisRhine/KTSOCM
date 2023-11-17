interface Props {
    showModal: boolean
    onClose: () => void
  }


const CasualtyChecksecondRoll = (props: Props) => {
    const { showModal, onClose } = props
  
    const isActive = showModal ? 'is-active' : ''

    
const CasualtyCheckSecondRoll = () => {

    return (
    <div className={`modal ${isActive}`}><p> more rules go here</p><button className="button" onClick={onClose}>
        Passed
    </button></div>
)
}

export default CasualtyCheckSecondRoll