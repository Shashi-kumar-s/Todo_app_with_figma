import "../styles/home.css"
import FontAwesome from "../components/fontAwesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import InputField from "../components/inputField"
import TodoList from "./TodoList"
import Modal from "../components/modal"
import { useEffect, useState } from "react"
import CategoryList from "../components/categoryList/Index"
import { ToastContainer, toast } from "react-toastify"
import Switch from "@mui/material/Switch"
import darkTheme from "../Theme/theme"

const Home = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } }
  const [darkMode, setDarkMode] = useState(false)

  const [modal, setModal] = useState(false)
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    tag: [],
  })
  const [allData, setAllData] = useState([])
  const [listOfTodos, setListOfTodos] = useState("")
  const [editId, setEditId] = useState("")
  const [check, setCheck] = useState(false)

  // ===========================================>
  const openModal = () => setModal(true)

  // ========================================================>
  useEffect(() => {
    setListOfTodos(allData)
  }, [allData])

  // ===================================>
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  // ======================================>
  const addTodo = () => {
    console.log(editId, "---------------")
    if (
      inputData.title.trim() &&
      inputData.description.trim() &&
      editId == ""
    ) {
      setAllData([{ id: Date.now(), checked: false, inputData }, ...allData])
      setInputData("")
      setModal(false)
      toast.success("Todo List Added!", {
        position: "top-center",
        theme: "colored",
        autoClose: 1000,
      })
    } else {
      const updateTodos = allData.map((elem) =>
        elem.id === editId
          ? (elem = { id: elem.id, checked: elem.checked, inputData })
          : { id: elem.id, checked: elem.checked, inputData: elem.inputData }
      )
      setAllData(updateTodos)
      setEditId(0)
      setModal(false)
      setInputData("")
      toast.success("Todo List Edited!", {
        position: "top-center",
        theme: "colored",
        autoClose: 600,
      })

      return
    }
  }

  // ================================================>
  const handleCategoryData = (e) => {
    if (inputData.tag.includes(e.target.value)) {
      const data = inputData.tag.filter((ele) => ele !== e.target.value)
      setInputData((old) => {
        return {
          ...old,
          tag: data,
        }
      })
    } else {
      const newArray = [...inputData.tag]
      newArray.push(e.target.value)
      setInputData((old) => {
        return {
          ...old,
          tag: newArray,
        }
      })
    }
  }

  // ===============================================>
  const handleDelete = (id, setToggleModal) => {
    const filterData = allData.filter((ele) => ele.id !== id)
    setAllData(filterData)
    toast.success("Todo List Deleted!", {
      position: "top-center",
      theme: "colored",
      autoClose: 1000,
    })
    setToggleModal(false)
  }

  // ================================================>
  const handleEdit = (id, setToggleModal) => {
    allData.map((ele) => {
      if (ele.id === id) {
        setInputData(() => {
          return {
            title: ele.inputData.title,
            description: ele.inputData.description,
          }
        })
        setModal(true)
        setToggleModal(false)
        setEditId(id)
      }
    })
  }

  // ===========================================>
  const handleCheckBox = (id) => {
    const checkData = allData.map((ele) =>
      ele.id === id
        ? (ele = {
            id: ele.id,
            checked: (ele.checked = !ele.checked),
            inputData: ele.inputData,
          })
        : { id: ele.id, checked: ele.checked, inputData: ele.inputData }
    )
    setAllData(checkData)
  }

  // =====================================>

  const hideDoneTask = (e) => {
    const data = allData.filter((ele) => !ele.checked)
    console.log("dattta", data)
    setListOfTodos(data)
  }

  const unhideDoneTask = (e) => {
    setListOfTodos(allData)
  }
  const handlecheck = () => {
    setCheck(!check)
    if (check === false) {
      console.log("+========", check)
      hideDoneTask()
    } else {
      console.log("---------88", check)
      unhideDoneTask()
    }
  }

  // ==========================================>

  return (
    <>
      <div
        className="home__page"
        style={
          darkMode
            ? {
                background: darkTheme.primaryDark.backgroundColor,
              }
            : {
                background: darkTheme.primaryLight.backgroundColor,
              }
        }
      >
        <div className="todo__Header">
          <h2>todo</h2>
          <ToastContainer />
          <Switch
            {...label}
            defaultChecked
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
          />
          <FontAwesome
            iconName={faPlus}
            className={"todo__add__icon"}
            onclick={openModal}
          />
        </div>
        <div className="todo__section">
          <div className="category__list">
            <CategoryList className={"category"} darkmode={darkMode} />
            <div className="check__task">
              <InputField
                type={"checkbox"}
                checked={check ? true : false}
                onchange={handlecheck}
              />
              <p>Hide Done Tasks</p>
            </div>
          </div>
          {listOfTodos.length > 0 && (
            <div className="todolist__section">
              {listOfTodos.map((ele) => {
                return (
                  <TodoList
                    key={ele.id}
                    title={ele.inputData.title}
                    description={ele.inputData.description}
                    id={ele.id}
                    handledelete={handleDelete}
                    handleEdit={handleEdit}
                    checked={ele.checked}
                    handleCheckBox={handleCheckBox}
                    catdata={ele.inputData.tag}
                  />
                )
              })}
            </div>
          )}
        </div>
        <Modal
          modal={modal}
          setModal={setModal}
          inputData={inputData}
          onchange={handleChange}
          addtodo={addTodo}
          editId={editId}
          handlecategorydata={handleCategoryData}
          darkmode={darkMode}
        />
      </div>
    </>
  )
}

export default Home
