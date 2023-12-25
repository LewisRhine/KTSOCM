import { useForm } from 'react-hook-form'
//KNEEL BEFORE
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { sessionContext } from '../context/sessionContext.ts'
import { factions } from '../data/faction.ts'
import useDataslateStore from '../stores/dataslateStore.ts'

type FormData = {
  killTeamName: string
  faction: string
}

interface Props {
  showModal: boolean
  onClose: () => void
}

const NewDataslateModal = (props: Props) => {
  const { showModal, onClose } = props

  const session = useContext(sessionContext)
  const createDataslate = useDataslateStore(state => state.createDataslate)

  const schema: ZodType<FormData> = z.object({
    killTeamName: z.string().min(2).max(50),
    faction: z.string().nonempty('Must select a Faction!!!'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    const factionConverter = Number(data.faction)

    const faction = factions.find((faction) => faction.id === factionConverter)

    if (!faction) {
      console.log('Opprs error')
      return
    }

    createDataslate(session?.user.id ?? '', data?.killTeamName, faction, '')
    onClose()
  }

  const isActive = showModal ? 'is-active' : ''

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Enter New Team</p>
          <button className="delete" onClick={onClose} />
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="modal-card-body">
            <div className="field">
              Enter Kill Team Name...
              <input
                className="input is-small"
                type="text"
                {...register('killTeamName')}
              />
              {errors.killTeamName && (
                <span style={{ color: 'red' }}>
                  {errors.killTeamName.message}
                </span>
              )}
              <div className="field">
                <label className="lable"> Chose Faction </label>
                <div className="control" />
                <div className="select">
                  <select {...register('faction')} defaultValue="">
                    <option value=""> Select From Dropdown</option>
                    {factions?.map((faction, index) => (
                      <option key={index} value={faction.id.toString()}>
                        {faction.name}
                      </option>
                    ))}
                  </select>
                </div>
                <span style={{ color: 'red' }}>{errors.faction?.message}</span>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-primary" type="submit">
              Submit
            </button>
            <button className="button" onClick={onClose}>
              Cancel
            </button>
          </footer>
        </form>
      </div>
    </div>
  )
}

export default NewDataslateModal
