import { useRef } from 'react'
import useDataslateStore from '../stores/dataslateStore.ts'
import BackgroundSection from './BackgroundSection.tsx'

const TeamBackground = () => {
  const history = useDataslateStore((state) => state.selectedDataslate?.history)
  const quirks = useDataslateStore((state) => state.selectedDataslate?.quirks)
  const notes = useDataslateStore((state) => state.selectedDataslate?.notes)
  const historyInputRef = useRef<HTMLTextAreaElement>(null)
  const saveHistory = useDataslateStore((state) => state.saveHistory)
  const saveQuirks = useDataslateStore((state) => state.saveQuirks)
  const saveNotes = useDataslateStore((state) => state.saveNotes)

  return (
    <>
      <BackgroundSection title="History" value={history} onSave={saveHistory} />
      <BackgroundSection title="Quirks" value={quirks} onSave={saveQuirks} />
      <BackgroundSection title="Notes" value={notes} onSave={saveNotes} />
    </>
  )
}

export default TeamBackground
