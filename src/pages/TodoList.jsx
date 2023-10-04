import { faCircle, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import FontAwesome from "../components/fontAwesome"
import "../styles/todolist.css"
import InputField from "../components/inputField"
import TodoButton from "../components/button"
import propTypes from "prop-types"
import { useState } from "react"

const TodoList = (props) => {
  const { title, description, id, handledelete, handleEdit, catdata } = props

  const [toggleModal, setToggleModal] = useState(false)
  const [color, setColor] = useState("")

  const handleEllipsisModal = () => {
    setToggleModal(!toggleModal)
  }

  catdata.length > 0 &&
    catdata.map((ele) => {
      setColor(ele)

      // switch (ele) {
      //   case "work":
      //     setColor("button_1")
      //     break
      //   case "study":
      //     setColor("button_2")
      //     break
      //   case "entertainment":
      //     setColor("button_3")
      //     break
      //   case "family":
      //     setColor("button_4")
      //     break
      //   default:
      //     ele
      //     break
      // }

      // if (ele === "work") {
      //   setColor("button_1")
      // } else if (ele === "study") {
      //   setColor("button_2")
      // } else if (ele === "entertainment") {
      //   setColor("button_3")
      // } else if (ele === "family") {
      //   setColor("button_4")
      // }
    })

  return (
    <div className="todolist__page">
      <div className="todolist__header">
        <h3>{title}</h3>
        <div>
          <FontAwesome
            iconName={faEllipsis}
            className={"todolist__ellipsis"}
            onclick={() => handleEllipsisModal(id)}
          />
          {toggleModal && (
            <div className="todolist__button">
              <TodoButton
                value={"Edit"}
                className={"todolist__btn"}
                onclick={() => handleEdit(id, setToggleModal)}
              />
              <TodoButton
                value={"Delete"}
                className={"todolist__btn"}
                onclick={() => handledelete(id, setToggleModal)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="todolist__description">
        <p>{description}</p>
      </div>
      <div className="todolist__category">
        <div className="todolist__color__category">
          <li>{color}</li>
          {/* {color && (
            <li>
              <FontAwesome iconName={faCircle} 
              className={color.toString()}
               />
            </li>
          )} */}
        </div>
        <div className="todolist__task__status">
          <InputField type={"checkbox"} />
          <p>Done</p>
        </div>
      </div>
    </div>
  )
}

TodoList.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  id: propTypes.number,
  onclick: propTypes.func,
}

export default TodoList
