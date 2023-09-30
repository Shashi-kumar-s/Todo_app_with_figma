import "../styles/home.css"
import FontAwesome from "../components/fontAwesome"
import { faCircle, faPlus } from "@fortawesome/free-solid-svg-icons"
import InputField from "../components/inputField"
import TodoList from "./TodoList"

const Home = () => {
  return (
    <>
      <div className="home__page">
        <div className="todo__Header">
          <h2>todo</h2>
          <FontAwesome iconName={faPlus} className={"todo__add__icon"} />
        </div>
        <div className="todo__section">
        <div className="category__list">
            <li>
              <FontAwesome
                iconName={faCircle}
                className="work__category icon__size"
              />
              work
            </li>
            <li>
              <FontAwesome
                iconName={faCircle}
                className="study__category icon__size"
              />{" "}
              study
            </li>
            <li>
              <FontAwesome
                iconName={faCircle}
                className="entertainment__category icon__size"
              />{" "}
              entertainment
            </li>
            <li>
              <FontAwesome
                iconName={faCircle}
                className="family__category icon__size"
              />{" "}
              family
            </li>
        <div className="check__task">
          <InputField type={"checkbox"} />
          <p>Hide Done Tasks</p>
        </div>
        </div>
        <div className="todolist__section">
          <TodoList />
          <TodoList />
          <TodoList />
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
