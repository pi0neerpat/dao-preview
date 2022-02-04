import { createPortal } from 'react-dom'
import Button from 'src/components/Button/Button'

const ModalContainer = ({
  isVisible,
  hideModal,
  content,
  headerText,
  submitText,
  cancelText,
  onSubmit,
  icon,
  hideCancelButton,
}) => {
  // eslint-disable-next-line no-unused-expressions
  isVisible
    ? ((document.body.style.position = 'fixed'),
      (document.body.style.width = '100%'))
    : (document.body.style.position = 'relative')

  return isVisible
    ? createPortal(
        <div>
          <div className="overlay" aria-hidden="true" onClick={hideModal} />
          <div className="modal-wrapper">
            <div className="modal-header-wrapper">
              <h2 className="header-text">{headerText}</h2>
              {icon}
            </div>
            {typeof content === 'string' ? (
              <p className="body-text">{content}</p>
            ) : (
              <div className="body-text">{content}</div>
            )}
            <div className="modal-button-wrapper">
              {!hideCancelButton ? (
                <Button variant="transparent" onClick={hideModal}>
                  {cancelText || 'Cancel'}
                </Button>
              ) : (
                <div></div>
              )}
              <Button variant="blue" onClick={onSubmit}>
                {submitText}
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null
}

export default ModalContainer
