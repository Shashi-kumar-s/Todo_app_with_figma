import { Link } from "react-router-dom"
import "../../styles/categorylist.css"
import FontAwesome from "../fontAwesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import propTypes from "prop-types"
import { useState } from "react"
import TodoButton from "../button"

const CategoryList = (props) => {
  const { className } = props
  const [val, setVal] = useState([])
  const handleRadio = (e) => {
    setVal([e.target.value, ...val])
  }
  console.log(val, "+++++++++++")
  return (
    <div className={className}>
      <FontAwesome iconName={faCircle} className="work__category icon__size" />
      <TodoButton value={"work"}>work</TodoButton>
      <FontAwesome iconName={faCircle} className="study__category icon__size" />
      <TodoButton value={"study"}>work</TodoButton>
      <FontAwesome iconName={faCircle} className="entertainment__category icon__size" />
      <TodoButton value={"entertainment"}>work</TodoButton>
      <FontAwesome iconName={faCircle} className="family__category icon__size" />
      <TodoButton value={"family"}>work</TodoButton>
    </div>
  )
}
CategoryList.propTypes = {
  className: propTypes.string,
}

export default CategoryList
