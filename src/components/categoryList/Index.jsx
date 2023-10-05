import "../../styles/categorylist.css"
import propTypes from "prop-types"
import TodoButton from "../button"
import Button from "../../staticdata/buttonstaticdata/ButtonData"

const CategoryList = (props) => {
  const { className,handlecategorydata} = props


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
            color={ele.color}
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
