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
        <section className="section is-medium">
          <h1 className="title">{title}</h1>
          <textarea
            className="textarea"
            ref={textAreaRef}
            defaultValue={value}></textarea>
        </section>
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
      <section className="section is-medium">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{value ?? 'None'}</h2>
      </section>
    </a>
  )
}

export default BackgroundSection
