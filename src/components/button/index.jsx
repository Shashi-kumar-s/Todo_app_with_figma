import propTypes from "prop-types"
import FontAwesome from "../fontAwesome"

const TodoButton = (props) => {
  const { type, value, buttonStyle, onclick,iconname,classname,color,darkmode } = props

  return (
    <button type={type} className={buttonStyle} onClick={onclick} value={value} color={color}> <FontAwesome iconName={iconname} className={classname}/>
      <p style={darkmode?{color:"white"}:{color:"black"}}>{value}</p>
    </button>
  )
}

TodoButton.propTypes = {
  className: propTypes.string,
  onclick: propTypes.func,
  type: propTypes.string,
}

export default TodoButton
