// One more prop is onClose, which should be called .
// When styling the form fields, pay close attention to how the styles differ depending on the state of the element’s state.
// To refresh your memory about how to style form elements, refer back to the relevant lessons in the form chapter from sprint 2.
import "./ModalWithForm.css";

// add the corresponding title, name, and buttonText props, then substitute their values inside the JSX
function ModalWithForm({
  children,
  name,
  title,
  onClose,
  btnText = "Add garment",
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        {/* modal close button for clicks on button, outside of the modal, or presses Esc*/}
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        {/* The form’s title */}
        <h3 className="modal__title">{title}</h3>
        {/* The <form> tag itself. */}
        <form className="modal__form" name={name}>
          {children}
          {/* The button that submits the modal. */}
          <button className="modal__submit" type="submit">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
