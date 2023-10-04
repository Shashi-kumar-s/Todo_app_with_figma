import propTypes from "prop-types"

const InputField = (props) => {
  const {
    type,
    placeholder,
    className,
    name,
    onchange,
    autofocus,
    autocomplete,
    value
  } = props

  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      autoFocus={autofocus}
      autoComplete={autocomplete}
      className={className}
      onChange={onchange}
    />
  )
}

InputField.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
  name: propTypes.string,
  onchange: propTypes.func,
  autofocus: propTypes.bool,
  autocomplete: propTypes.string,
}

export default InputField
