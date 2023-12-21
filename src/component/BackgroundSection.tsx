import { useRef, useState } from 'react'

interface Props {
  title: string
  value: string | undefined
  onSave: (newValue: string) => void
}

const BackgroundSection = (props: Props) => {
  const { title, value, onSave } = props
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const callOnSave = () => {
    onSave(textAreaRef.current?.value ?? '')
    setEditMode(false)
  }
  const [editMode, setEditMode] = useState(false)
  if (editMode)
    return (
      <>
        <div className={'content'}>
          <h1 className="title">{title}</h1>
          <textarea
            className="textarea is-family-secondary"
            ref={textAreaRef}
            defaultValue={value}
          />
        </div>
        <div className="buttons">
          <button className="button is-primary" onClick={callOnSave}>
            Save
          </button>
          <button className="button" onClick={() => setEditMode(false)}>
            Cancel
          </button>
        </div>
      </>
    )

  return (
    <a onClick={() => setEditMode(true)}>
      <h1 className="title">{title}</h1>
      <h2 className="is-family-secondary is-size-5">{value ?? 'None'}</h2>
    </a>
  )
}

export default BackgroundSection
