import propTypes from "prop-types"

const TextArea = (props) => {
  const { name, rows, cols, className, onchange, placeholder, value } = props
  return (
    <textarea
      name={name}
      cols={cols}
      rows={rows}
      className={className}
      onChange={onchange}
      placeholder={placeholder}
      value={value}
    ></textarea>
  )
}
TextArea.propTypes = {
  name: propTypes.string,
  rows: propTypes.string,
  cols: propTypes.string,
  className: propTypes.string,
  onchange: propTypes.func,
  placeholder: propTypes.string,
  value: propTypes.string,
}

export default TextArea
