import "../styles/getstarted.css"
import { Link } from "react-router-dom"
import TodoButton from "../components/button"

const GetStarted = () => {
  return (
    <div className="get__started">
      <div className="get__started__main">
        <div className="get__started__Header">
          <span id="get__started__t">t</span>
          <span id="get__started__o">o</span>
          <span id="get__started__d">d</span>
          <span id="get__started__oo">o</span>
        </div>
        <div className="get__started__description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sint
            tenetur consequatur similique. Voluptas, enim. Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <Link to="/home">
          <TodoButton
            value={"Get Started"}
            className={"get__started__button"}
          />
        </Link>
      </div>
    </div>
  )
}

export default GetStarted