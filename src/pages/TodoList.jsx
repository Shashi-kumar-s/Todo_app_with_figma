import { faCircle, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import FontAwesome from "../components/fontAwesome"
import "../styles/todolist.css"
import InputField from "../components/inputField"
import TodoButton from "../components/button"

const TodoList = () => {
  return (
    <div className="todolist__page">
      <div className="todolist__header">
        <h3>The first task title</h3>
        <FontAwesome iconName={faEllipsis} className={"todolist__ellipsis"}/>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum impedit
          a dolorum rem totam quis.
        </p>
      </div>
      <div className="todolist__category">
       <div className="todolist__color__category">
        <li>
          <FontAwesome iconName={faCircle} className={"todolist__icon__1"}/>
        </li>
        <li>
          <FontAwesome iconName={faCircle} className={"todolist__icon__2"} />
        </li>
        <li>
          <FontAwesome iconName={faCircle} className={"todolist__icon__3"} />
        </li>
       </div>
       <div className="todolist__task__status">
        <InputField type={"checkbox"}/>
        <p>Done</p>
       </div>
      </div>
    </div>
  )
}

export default TodoList
