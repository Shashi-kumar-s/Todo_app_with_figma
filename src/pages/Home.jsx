import "../styles/home.css"
import FontAwesome from "../components/fontAwesome"
import { faMoon, faPlus, faSun } from "@fortawesome/free-solid-svg-icons"
import InputField from "../components/inputField"
import TodoList from "./TodoList"
import Modal from "../components/modal"
import { useEffect, useState } from "react"
import CategoryList from "../components/categoryList/Index"
import { ToastContainer, toast } from "react-toastify"
import Switch from "@mui/material/Switch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TodoButton from "../components/button"

const Home = () => {
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
  const [isDark, setIsDark] = useState(false)
  const [editCategory, setEditCategory] = useState([])

  // ===========================================>
  const openModal = () => setModal(true)
  const modalClose = () => {
    setModal(false)
    setInputData("")
    setEditId("")
  }

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
    if (
      inputData.title.trim() &&
      inputData.description.trim() &&
      editId == ""
    ) {
      setAllData([{ id: Date.now(), checked: false, inputData }, ...allData])
      setInputData("")
      setInputData((old) => {
        return {
          ...old,
          tag: [],
        }
      })
      setModal(false)
      toast.success("Todo List Added!", {
        position: "top-center",
        theme: "colored",
        autoClose: 1000,
      })
    } else if (editId !== "") {
      const updateTodos = allData.map((elem) =>
        elem.id === editId
          ? (elem = { id: elem.id, checked: elem.checked, inputData })
          : { id: elem.id, checked: elem.checked, inputData: elem.inputData }
      )
      setAllData(updateTodos)
      setEditId("")
      setModal(false)
      setInputData("")
      toast.success("Todo List Edited!", {
        position: "top-center",
        theme: "colored",
        autoClose: 600,
      })
    }
    setEditId("")
  }

  // ================================================>
  const handleCategoryData = (e) => {
    if (inputData.tag.includes(e.target.textContent)) {
      const data = inputData.tag.filter((ele) => ele !== e.target.textContent)
      setInputData((old) => {
        return {
          ...old,
          tag: data,
        }
      })
    } else {
      const newArray = [...inputData.tag]
      newArray.push(e.target.textContent)
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
            tag:ele.inputData.tag
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
      <div className="home__page" data-theme={isDark ? "dark" : "light"}>
        <div className="todo__Header">
          <h2>Todo</h2>
          <ToastContainer />
          <div className="dark__addIcon">
            <div>
              <FontAwesome
                iconName={faPlus}
                className={"todo__add__icon"}
                onclick={openModal}
              />
            </div>
            <div className="dark" onClick={() => setIsDark(!isDark)}>
              {isDark ? (
                <FontAwesome iconName={faSun} className={"dark__icon"} />
              ) : (
                <FontAwesome iconName={faMoon} className={"dark__icon"} />
              )}
            </div>
          </div>
        </div>
        <div className="todo__section">
          <div className="category__list">
            <CategoryList className={"category"} />
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
          modalClose={modalClose}
          inputData={inputData}
          onchange={handleChange}
          addtodo={addTodo}
          editId={editId}
          handlecategorydata={handleCategoryData}
          catedata={inputData.tag}
        />
      </div>
    </>
  )
}

export default Home
