import "../styles/home.css"
import FontAwesome from "../components/fontAwesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import InputField from "../components/inputField"
import TodoList from "./TodoList"
import Modal from "../components/modal"
import { useEffect, useState } from "react"
import CategoryList from "../components/categoryList/Index"

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


  // ================================================>
  const handleCategoryData = (e) => {
    if (inputData.tag.includes(e.target.value)) {
      const data = inputData.tag.filter((ele) => ele !== e.target.value)
      inputData.tag = data
    } else {
      inputData.tag.push(e.target.value)
    }
  }

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
  const addTodo = (e) => {
    e.preventDefault()
    if (inputData.title && inputData.description !== "") {
      setAllData([{ id: Date.now(), inputData }, ...allData])
      // handleCategoryData()
      setInputData("")
      setModal(false)
    }
    if (editId) {
      const updateTodos = allData.map((elem) =>
        elem.id === editId
          ? (elem = { id: elem.id, inputData })
          : { id: elem.id, inputData: elem.inputData }
      )
      setAllData(updateTodos)
      setEditId(0)
      setInputData("")
      setModal(false)
      return
    }
  }

  // ===============================================>
  const handleDelete = (id, setToggleModal) => {
    const filterData = allData.filter((ele) => ele.id !== id)
    setAllData(filterData)
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

  return (
    <>
      <div className="home__page">
        <div className="todo__Header">
          <h2>todo</h2>
          <FontAwesome
            iconName={faPlus}
            className={"todo__add__icon"}
            onclick={openModal}
          />
        </div>
        <div className="todo__section">
          <div className="category__list">
            <CategoryList className={"category"} />
            <div className="check__task">
              <InputField type={"checkbox"} />
              <p>Hide Done Tasks</p>
            </div>
          </div>
          <div className="todolist__section">
            {listOfTodos.length > 0 &&
              listOfTodos.map((ele, i) => {
                return (
                  <TodoList
                    key={i}
                    title={ele.inputData.title}
                    description={ele.inputData.description}
                    id={ele.id}
                    handledelete={handleDelete}
                    handleEdit={handleEdit}
                    catdata={ele.inputData.tag}
                  />
                )
              })}
          </div>
        </div>
        <Modal
          modal={modal}
          setModal={setModal}
          inputData={inputData}
          onchange={handleChange}
          addtodo={addTodo}
          editId={editId}
          handlecategorydata={handleCategoryData}
        />
      </div>
    </>
  )
}

export default Home
