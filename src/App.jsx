import './styles/global.css'
import './styles/mediascreen/mediascreen.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import GetStarted from "./pages/GetStarted"
import Work from './pages/Work'
import Study from './pages/Study'
import Family from './pages/Family'
import Entertainment from './pages/Entertainment'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/family" element={<Family/>}/>
          <Route path="/entertainment" element={<Entertainment/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
