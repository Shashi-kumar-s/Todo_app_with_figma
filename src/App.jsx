import './styles/global.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import GetStarted from "./pages/GetStarted"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
