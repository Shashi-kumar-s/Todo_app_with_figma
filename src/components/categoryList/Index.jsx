import "../../styles/categorylist.css"
import propTypes from "prop-types"
import TodoButton from "../button"
import ButtonData from "../../staticdata/buttonstaticdata/ButtonData"

const CategoryList = (props) => {
  const { className,handlecategorydata,darkmode} = props


  return (
    <div className={className}>
      {ButtonData.map((ele) => {
        return (
          <TodoButton
            key={ele.id}
            iconname={ele.iconname}
            value={ele.value}
            buttonStyle={"category__button"}
            onclick={handlecategorydata}
            classname={ele.classname}
            color={ele.color}
            darkmode={darkmode}
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
