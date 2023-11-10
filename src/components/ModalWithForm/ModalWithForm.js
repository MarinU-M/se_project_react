import "./ModalWithForm.css";

// add the corresponding title, name, and buttonText props, then substitute their values inside the JSX
function ModalWithForm({
  children,
  name,
  title,
  onClose,
  btnText,
  isOpen,
  onSubmit,
  altOptionBtn,
  onAltOptionBtn,
}) {
  return (
    <div className={`modal modal_type_${name}`} onClick={onClose}>
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose} />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <div className="modal__btns">
            <button className="modal__submit" type="submit">
              {btnText}
            </button>
            {altOptionBtn && (
              <button className="modal__alt-btn" onclick={onAltOptionBtn}>
                {altOptionBtn}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
