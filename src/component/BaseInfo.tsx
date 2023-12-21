import useDataslateStore from '../stores/dataslateStore.ts'
import { useState } from 'react'
import BaseInfoModal from '../modals/BaseInfoModal.tsx'

const BaseInfo = () => {
  const name = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.name,
  )
  const description = useDataslateStore(
    (state) => state.selectedDataslate?.baseOfOperations.description,
  )

  const [editInfo, setEditInfo] = useState(false)

  return (
    <div>
      <BaseInfoModal showModal={editInfo} onClose={() => setEditInfo(false)} />
      {!name && !description && (
        <button className={'button'} onClick={() => setEditInfo(true)}>
          Add Base info
        </button>
      )}
      {name && <a onClick={() => setEditInfo(true)}><p className={'title is-4'}>{name}</p></a>}
      {description && <a onClick={() => setEditInfo(true)}><p className={'subtitle is-4'}>{description}</p></a>}
    </div>
  )
}

export default BaseInfo
