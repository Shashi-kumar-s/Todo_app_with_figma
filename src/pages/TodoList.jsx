import { faCircle, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import FontAwesome from "../components/fontAwesome"
import "../styles/todolist.css"
import InputField from "../components/inputField"
import TodoButton from "../components/button"
import propTypes from "prop-types"
import { useState } from "react"

const TodoList = (props) => {
  const {
    title,
    description,
    id,
    handledelete,
    handleEdit,
    checked,
    handleCheckBox,
    catdata,
  } = props

  const [toggleModal, setToggleModal] = useState(false)
  const [color, setColor] = useState("")

  const handleEllipsisModal = () => {
    setToggleModal(!toggleModal)
  }

  
  return (
    <div className="todolist__page">
      <div className="todolist__header">
        {checked ? (
          <h3>
            <del>{title}</del>
          </h3>
        ) : (
          <h3>{title}</h3>
        )}
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
                buttonStyle={"todolist__btn"}
                onclick={() => handleEdit(id, setToggleModal)}
              />
              <TodoButton
                value={"Delete"}
                buttonStyle={"todolist__btn"}
                onclick={() => handledelete(id, setToggleModal)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="todolist__description">
        {checked ? (
          <p>
            <del>{description}</del>
          </p>
        ) : (
          <p>{description}</p>
        )}
      </div>
      <div className="todolist__category">
        <div className="todolist__color__category">
          {color && <li>{color}</li>}
        </div>
        <div className="todolist__task__status">
          <InputField
            type={"checkbox"}
            checked={checked ? true : false}
            onchange={() => handleCheckBox(id)}
          />
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
