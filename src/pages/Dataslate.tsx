import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Dataslate, getDataslate } from '../data/dataslate.ts'

const Dataslate = () => {
  const { dataslateId } = useParams()
  const { hash } = useLocation()
  const nav = useNavigate()

  const [dataslate, setDataslate] = useState<Dataslate | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!dataslateId) return
    const fetchDataslate = async () => {
      const { data, error } = await getDataslate(dataslateId)

      if (error) {
        setError(true)
        return
      }

      if (data) setDataslate(data)
      setError(false)
    }

    fetchDataslate()
  }, [dataslateId])

  useEffect(() => {
    if (!hash) nav('#operatives')
  }, [])

  if (error) return <h1> There was an error loading Dataslate! </h1>
  if (!dataslate) return <h1> Loading </h1>

  return (
    <>
      <div className={'container'}>
        <section className={'section'}>
          <div className={'columns is-vcentered is-centered'}>
            <div className={'column has-text-centered'}>
              <div>
                <p className="title">{dataslate.teamName}</p>
                <p className="subtitle">{dataslate.faction.name}</p>
              </div>
            </div>
            <div className={'columns is-mobile is-vcentered is-centered'}>
              <div className={'column has-text-centered'}>
                <p>Requisition Points</p>
                <p className="title is-3">{dataslate.reqPoints}</p>
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
          {hash === '#operatives' && <>Operatives</>}
          {hash === '#base' && <>Base of Operations</>}
          {hash === '#background' && <>Background</>}
        </section>
      </div>
    </>
  )
}

export default Dataslate
