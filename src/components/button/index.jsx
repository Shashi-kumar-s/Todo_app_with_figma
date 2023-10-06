import propTypes from "prop-types"
import FontAwesome from "../fontAwesome"

const TodoButton = (props) => {
  const { type, value, className, onclick,iconname,classname,color } = props

  return (
    <button type={type} className={className} onClick={onclick}value={value} color={color}><FontAwesome iconName={iconname} className={classname}/>
      {value}
    </button>
  )
}

TodoButton.propTypes = {
  className: propTypes.string,
  onclick: propTypes.func,
  type: propTypes.string,
}

export default TodoButton
