import "./styles/global.css"
import "./styles/mediascreen/mediascreen.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import GetStarted from "./pages/GetStarted"
import Work from "./pages/Work"
import Family from "./pages/Family"
import Entertainment from "./pages/Entertainment"
import "react-toastify/dist/ReactToastify.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const darkTheme = createTheme({
  palette: {
    darkColor: "#333231",
    lightColor: "#edebe8",
  },
  primaryLight: {
    borderColor: "#ddede1",
    backgroundColor: "#f0f2f0",
    color:"#000"
  },
  primaryDark: {
    backgroundColor: "#787775",
    borderColor: "#edf2ed",
    color:"#fff"
  },
})
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/family" element={<Family />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
