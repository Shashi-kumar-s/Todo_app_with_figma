import TodoButton from "../button"
import InputField from "../inputField"
import propTypes from "prop-types"
import "../../styles/modal.css"
import TextArea from "../textarea"

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

  console.log(catedata, "+++8888888888")
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
                <div className="modal__check__category">
                  <InputField
                    type={"checkbox"}
                    value={"Work"}
                    checked={catedata.filter((ele) => {
                      if (ele === "Work") {
                        console.log("hhhhhhheeeeeeeeellllllloooo");
                        ("true")
                      } else {
                        ("false")
                      }
                    })}
                    id={"work"}
                    className={"modal__list"}
                  />
                  <label
                    htmlFor="work"
                    className="modal__label"
                    onClick={handlecategorydata}
                  >
                    Work
                  </label>
                </div>
                <div className="modal__check__category">
                  <InputField
                    type={"checkbox"}
                     checked={catedata.filter((ele) => {
                      if (ele === "Study") {
                        console.log("hhhhhhheeeeeeeeellllllloooo");
                        ("true")
                      } else {
                        ("false")
                      }
                    })}
                    value={"Study"}
                    id={"Study"}
                    className={"modal__list"}
                  />
                  <label
                    htmlFor="Study"
                    className="modal__label"
                    onClick={handlecategorydata}
                  >
                    Study
                  </label>
                </div>
                <div className="modal__check__category">
                  <InputField
                    type={"checkbox"}
                    value={"Entertainment"}
                    className={"modal__list"}
                    id={"Entertainment"}
                  />
                  <label
                    htmlFor="Entertainment"
                    className="modal__label"
                    onClick={handlecategorydata}
                  >
                    Entertainment
                  </label>
                </div>
                <div className="modal__check__category">
                  <InputField
                    type={"checkbox"}
                    value={"Family"}
                    id={"Family"}
                    className={"modal__list"}
                  />
                  <label
                    htmlFor="Family"
                    className="modal__label"
                    onClick={handlecategorydata}
                  >
                    Family
                  </label>
                </div>
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
