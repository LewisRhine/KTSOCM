import { StrategicAssets } from '../data/strategicAssets'
import StrategicAssetsProfile from '../component/AssetProfile'

interface Props {
  asset?: StrategicAssets
  onClose: () => void
}

const AssetProfileModal = (props: Props) => {
  const { asset, onClose } = props

  const isActive = asset ? 'is-active' : ''

  if (!asset) return null
  return (
    <div className={`modal ${isActive}`}>
      <button className="delete" onClick={onClose} />
      <div className="modal-background" onClick={onClose} />
      <div className="modal-content">
        <div className={'box'}>
          <StrategicAssetsProfile asset={asset} />
        </div>
      </div>
      <button className="modal-close is-large" onClick={onClose} />
    </div>
  )
}

export default AssetProfileModal
