import useDataslateStore from '../stores/dataslateStore.ts'
import BackgroundSection from './BackgroundSection.tsx'

const TeamBackground = () => {
  const history = useDataslateStore((state) => state.selectedDataslate?.history)
  const quirks = useDataslateStore((state) => state.selectedDataslate?.quirks)
  const notes = useDataslateStore((state) => state.selectedDataslate?.notes)
  const saveHistory = useDataslateStore((state) => state.saveHistory)
  const saveQuirks = useDataslateStore((state) => state.saveQuirks)
  const saveNotes = useDataslateStore((state) => state.saveNotes)

  return (
    <div className={'columns is-multiline'}>
      <div className={'column'}>
        <BackgroundSection
          title="History"
          value={history}
          onSave={saveHistory}
        />
      </div>
      <div className={'column'}>
        <BackgroundSection title="Quirks" value={quirks} onSave={saveQuirks} />
      </div>
      <div className={'column is-full'} style={{ paddingTop: '2rem' }}>
        <BackgroundSection title="Notes" value={notes} onSave={saveNotes} />
      </div>
    </div>
  )
}

export default TeamBackground
