import { StrategicAssets } from '../data/strategicAssets.ts'



interface Props {
    asset:StrategicAssets,
    buyMode?: boolean
}

const StrategicAssetsProfile = (props: Props) => {
    const {asset, buyMode} = props
    const {
        stimmStash,
        tacticalUplink,
        commsNetwork,
        warShrine,
        medBay,
        expandedArmoury,
        surveillanceSystem,
        intelligenceNetwork,
        engineeringBay, 
    } =asset
}