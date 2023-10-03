import propTypes from "prop-types"

const TodoButton = (props) => {
  const { type, value, className, onclick } = props

  return (
    <button type={type} className={className} onClick={onclick}>
      {value}
    </button>
  )
}

TodoButton.propTypes = {
  // value: propTypes.string,
  className: propTypes.string,
  onclick: propTypes.func,
  type: propTypes.string,
}

export default TodoButton
