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
  const addTodo = async (e) => {
    e.preventDefault()
    if (inputData.title && inputData.description !== "") {
      setAllData([{ id: Date.now(), checked: false, inputData }, ...allData])
      setInputData("")
      setModal(false)
      console.log("allllllltodo", allData)
    }
    if (editId) {
      const updateTodos = allData.map((elem) =>
        elem.id === editId
          ? (elem = { id: elem.id, checked: elem.checked, inputData })
          : { id: elem.id, checked: elem.checked, inputData: elem.inputData }
      )
      setAllData(updateTodos)
      setEditId(0)
      setInputData("")
      setModal(false)
      return
    }
  }

  // ================================================>
  const handleCategoryData = (e) => {
    console.log(e.target.color, e.target.value, "*********")
    if (inputData.tag.includes(e.target.color)) {
      const data = inputData.tag.filter((ele) => ele !== e.target.color)
      setInputData((old) => {
        return {
          ...old,
          tag: data,
        }
      })
    } else {
      const newArray = [...inputData.tag]
      newArray.push(e.target.color)
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
  
  const hideDoneTask = () => {
    
    // const data = allData.filter((ele) => !ele.checked)
    // setListOfTodos(data)
  }
  // ==========================================>
  console.log(check, "ccccccccccc")

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
              <InputField
                type={"checkbox"}
                checked={check ? true : false}
                onchange={hideDoneTask}
              />
              <p>Hide Done Tasks</p>
            </div>
          </div>
          {listOfTodos.length > 0 && (
            <div className="todolist__section">
              {listOfTodos.map((ele, i) => {
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
        />
      </div>
    </>
  )
}

export default Home
