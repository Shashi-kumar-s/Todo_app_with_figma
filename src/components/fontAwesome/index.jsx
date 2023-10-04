import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import propTypes from "prop-types"

const FontAwesome = (props) => {
  const { iconName, className, onclick } = props
  return (
    <>
      <FontAwesomeIcon
        icon={iconName}
        className={className}
        onClick={onclick}
      />
    </>
  )
}
FontAwesome.propTypes = {
  className: propTypes.string,
  onclick: propTypes.func,
}

export default FontAwesome
