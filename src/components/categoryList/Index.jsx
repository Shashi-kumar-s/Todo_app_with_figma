import "../../styles/categorylist.css"
import propTypes from "prop-types"
import TodoButton from "../button"
import Button from "../../staticdata/buttonstaticdata/ButtonData"
import { useState } from "react"

const CategoryList = (props) => {
  const { className } = props
  const [data, setData] = useState([])
  const handleCategoryData = (e) => {
    console.log(e.target, "+++++++++++++")
    setData([...data, e.target.value])
  }
  console.log(data)

  return (
    <div className={className}>
      {Button.map((ele) => {
        return (
          <TodoButton
            key={ele.id}
            iconname={ele.iconname}
            value={ele.value}
            className={"category__button"}
            onclick={handleCategoryData}
            classname={ele.classname}
          />
        )
      })}
    </div>
  )
}
CategoryList.propTypes = {
  className: propTypes.string,
}
export default CategoryList
