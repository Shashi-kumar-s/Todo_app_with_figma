import "../../styles/categorylist.css"
import propTypes from "prop-types"
import TodoButton from "../button"
import Button from "../../staticdata/buttonstaticdata/ButtonData"
import { useState } from "react"

const CategoryList = (props) => {
  const { className,handlecategorydata} = props

  // const [categoryData, setCategoryData] = useState([])
  // const handleCategoryData = (e) => {
  //   if (categoryData.includes(e.target.value)) {
  //     setCategoryData(categoryData.filter((ele) => ele !== e.target.value))
  //   } else {
  //     setCategoryData([...categoryData, e.target.value])
  //   }
  // }
  // console.log(categoryData,"++++++")


  return (
    <div className={className}>
      {Button.map((ele) => {
        return (
          <TodoButton
            key={ele.id}
            iconname={ele.iconname}
            value={ele.value}
            className={"category__button"}
            onclick={handlecategorydata}
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
