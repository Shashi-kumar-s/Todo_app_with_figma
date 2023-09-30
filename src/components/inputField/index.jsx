import propTypes from 'prop-types'

const InputField = (props) => {
    const{type}=props
  return (
    <input type={type}/>
  )
}

InputField.propTypes={
    type:propTypes.string
}

export default InputField