import OneInShape from '../assets/OneInShape.svg'
import TwoInShape from '../assets/TwoInShape.svg'
import ThreeInShape from '../assets/ThreeInShape.svg'
import SixInShape from '../assets/SixInShape.svg'

interface Props {
  text: string
}

const ShapeInjector = (props: Props) => {
  const { text } = props

  return (
    <>
      {Array.from(text).map((value, index) => {
        if (value === '1' && text[index + 1] === '"')
          return (
            <span
              className="icon is-small"
              style={{ position: 'relative', top: 3 }}
              key={index}>
              <img src={OneInShape} alt={'1"'} />
            </span>
          )

        if (value === '2' && text[index + 1] === '"')
          return (
            <span
              className="icon is-small"
              style={{ position: 'relative', top: 3 }}
              key={index}>
              <img src={TwoInShape} alt={'2"'} />
            </span>
          )

        if (value === '3' && text[index + 1] === '"')
          return (
            <span
              className="icon is-small"
              style={{ position: 'relative', top: 3 }}
              key={index}>
              <img src={ThreeInShape} alt={'3"'} />
            </span>
          )

        if (value === '6' && text[index + 1] === '"')
          return (
            <span
              className="icon is-small"
              style={{ position: 'relative', top: 3 }}
              key={index}>
              <img src={SixInShape} alt={'6"'} />
            </span>
          )

        if (value === '"') return null

        return <span key={index}>{value}</span>
      })}
    </>
  )
}

export default ShapeInjector 