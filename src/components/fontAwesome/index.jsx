import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import propTypes from 'prop-types'

const FontAwesome = (props) => {
  const { iconName,className } = props
  return (
    <>
      <FontAwesomeIcon icon={iconName} className={className} />
    </>
  )
}
FontAwesome.propTypes={
  className:propTypes.string
}

export default FontAwesome
