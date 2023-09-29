import propTypes from "prop-types"

const TodoButton = (props) => {
  const { value,className } = props

  return <button className={className}>{value}</button>
}

TodoButton.propTypes = {
  value: propTypes.string,
  className:propTypes.string
}

export default TodoButton
