import TodoButton from "../button"
import InputField from "../inputField"
import propTypes from "prop-types"
import "../../styles/modal.css"
import TextArea from "../textarea"
import { categoryData } from "../../staticdata/modalCategoryData"

const Modal = (props) => {
  const {
    modal,
    modalClose,
    inputData,
    onchange,
    addtodo,
    editId,
    handlecategorydata,
    catedata,
  } = props

  return (
    <>
      {modal && (
        <>
          <div className="modal__overlay" onClick={modalClose}></div>
          <div className="modal">
            <div className="modal__button">
              <TodoButton
                value={"Cancel"}
                buttonStyle={"modal__cancelbutton"}
                onclick={modalClose}
              />
              <TodoButton
                type={"submit"}
                value={editId ? "Edit" : "Add"}
                buttonStyle={"modal__addbutton"}
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
                maxlength={"30"}
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
              <div className="modal__list__category">
                  {categoryData.map((ele) => {
                    return (
                      <div key={ele.id} className="modal__check__category">
                        <InputField
                          type={ele.type}
                          value={ele.value}
                          id={ele.id}
                          checked={
                            catedata?.includes(ele.value)
                          }
                          className={"modal__list"}
                        />
                        <label
                          htmlFor={ele.value}
                          className="modal__label"
                          onClick={handlecategorydata}
                        >
                          {ele.value}
                        </label>
                      </div>
                    )
                  })}
              </div>
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
