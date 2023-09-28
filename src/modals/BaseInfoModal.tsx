import useDataslateStore from '../stores/dataslateStore.ts'
import { useRef } from 'react'

interface Props {
  showModal: boolean
  onClose: () => void
}

const BaseInfoModal = (props: Props) => {
  const isActive = props.showModal ? 'is-active' : ''
  const baseName = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.name,
  )
  const baseDescription = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.description,
  )
  const saveBaseInfo = useDataslateStore((state) => state.saveBaseInfo)

  const baseNameRef = useRef<HTMLInputElement>(null)
  const baseDescriptionRef = useRef<HTMLTextAreaElement>(null)

  const onSave = () => {
    const name = baseNameRef.current?.value ?? ''
    const description = baseDescriptionRef.current?.value ?? ''

    saveBaseInfo(name, description)
    props.onClose()
  }

  return (
    <div className={`modal ${isActive}`}>
      <button className="delete"></button>
      <div className="modal-background" />
      <div className="modal-content">
        <div className={'box'}>
          <div className={'content'}>
            <label className="label">Base Name</label>
            <input
              className="input"
              type="text"
              defaultValue={baseName}
              ref={baseNameRef}
            />
          </div>
          <div className={'content'}>
            <label className="label">Base Description</label>
            <textarea
              className="textarea"
              defaultValue={baseDescription}
              ref={baseDescriptionRef}
            />
          </div>
          <div className="buttons">
            <button className={'button is-primary'} onClick={onSave}>
              Save
            </button>
            <button className={'button'} onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" onClick={props.onClose} />
    </div>
  )
}

export default BaseInfoModal
