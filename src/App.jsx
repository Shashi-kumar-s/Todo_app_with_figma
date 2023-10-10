import "./styles/global.css"
import "./styles/mediascreen/mediascreen.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import GetStarted from "./pages/GetStarted"
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

    </div>
  )
}

export default App
