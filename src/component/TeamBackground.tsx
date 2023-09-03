import { useRef } from 'react'
import useDataslateStore from '../stores/dataslateStore.ts'

// const [isEditMode, setisEditMode] = useState(false);
const TeamBackground = () => {
  const history = useDataslateStore((state) => state.selectedDataslate?.history)
  const quirks = useDataslateStore((state) => state.selectedDataslate?.quirks)
  const notes = useDataslateStore((state) => state.selectedDataslate?.notes)
  const historyInputRef = useRef<HTMLTextAreaElement>(null)
  const saveHistory = useDataslateStore((state) => state.saveHistory)
  console.log(historyInputRef.current?.value)

  return (
    <>
      {/* <div className="navbar-end">
        <div className="navbar-item">
          <button className="button" onClick={() => setisEditMode(true)}>
            Edit
          </button>
        </div>
      </div> */}

      <section className="section is-medium">
        <h1 className="title">History</h1>
        <textarea
          className="textarea"
          ref={historyInputRef}
          defaultValue={history}></textarea>
      </section>
      <button
        className="button"
        onClick={() => saveHistory(historyInputRef.current?.value ?? '')}>
        Save
      </button>
      <section className="section is-medium">
        <h1 className="title">Quirks</h1>
        <h2 className="subtitle">{quirks ?? 'None'}</h2>
      </section>

      <section className="section is-medium">
        <h1 className="title">Notes</h1>
        <h2 className="subtitle">{notes ?? 'None'}</h2>
      </section>

      {/* <section className="section is-medium">
        <h1 className="title">History</h1>
        <h2 className="subtitle">{history ?? 'None'}</h2>
      </section>
      <section className="section is-medium">
        <h1 className="title">Quirks</h1>
        <h2 className="subtitle">{quirks ?? 'None'}</h2>
      </section>

      <section className="section is-medium">
        <h1 className="title">Notes</h1>
        <h2 className="subtitle">{notes ?? 'None'}</h2>
      </section> */}
    </>
  )
}

export default TeamBackground
