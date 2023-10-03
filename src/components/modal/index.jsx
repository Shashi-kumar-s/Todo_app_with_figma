import TodoButton from "../button"
import InputField from "../inputField"
import propTypes from "prop-types"
import "../../styles/modal.css"
import CategoryList from "../categoryList/Index"
import TextArea from "../textarea"

const Modal = (props) => {
  const { modal, setModal, inputData, onchange, addtodo, editId } = props

  const modalClose = () => setModal(false)

  return (
    <>
      {modal && (
        <>
          <div className="modal__overlay" onClick={modalClose}></div>
          <div className="modal">
            <div className="modal__button">
              <TodoButton
                value={"Cancel"}
                className={"modal__cancelbutton"}
                onclick={modalClose}
              />
              <TodoButton
                type={"submit"}
                value={editId ? "Edit" : "Add"}
                className={"modal__addbutton"}
                onclick={addtodo}
              />
            </div>
            {/* <form onSubmit={addtodo}> */}
            <div className="modal__inputfield">
              <label htmlFor="title">Title</label>
              <InputField
                type={"text"}
                name={"title"}
                value={inputData.title}
                placeholder={"add a title..."}
                className={"modal__input"}
                onchange={onchange}
                autofocus={true}
                autocomplete={"false"}
              />
              <label htmlFor="description">Description</label>
              <TextArea
                name={"description"}
                row={"2"}
                cols={"2"}
                className={"description__TextArea"}
                onchange={onchange}
                placeholder={"add a description"}
                value={inputData.description}
              />
              <h3>Tags</h3>
              <CategoryList className={"modal__list"} />
            </div>
            {/* </form> */}
          </div>
        </>
      )}
    </>
  )
}
Modal.propTypes = {
  modal: propTypes.bool,
  setModal: propTypes.func,
  onchange: propTypes.func,
  onclick: propTypes.func,
  //   inputData:propTypes.object
}

export default Modal
