import propTypes from "prop-types"

const InputField = (props) => {
  const {
    id,
    type,
    placeholder,
    className,
    name,
    onchange,
    autofocus,
    autocomplete,
    value,
    checked,
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
      checked={checked}
      id={id}
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
