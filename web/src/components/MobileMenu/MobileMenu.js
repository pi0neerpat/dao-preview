import { useCallback, useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import Button from 'src/components/Button/Button'
import Icon from 'src/components/Icon/Icon'

const MobileMenu = ({
  children,
  direction,
  isOpen,
  triggerContents,
  triggerProps,
  disableAutoClose,
  title,
}) => {
  const [showMenu, setShowMenu] = useState(isOpen)
  const childrenContainerRef = useRef(null)

  const handleChildrenClick = useCallback(() => {
    if (showMenu && !disableAutoClose) {
      childrenContainerRef.current.addEventListener('click', (e) => {
        const interactiveElements = ['a', 'button']
        if (interactiveElements.includes(e.target.tagName.toLowerCase())) {
          setShowMenu(false)
        }
      })
    }
  }, [showMenu, disableAutoClose])

  useEffect(() => {
    handleChildrenClick()
  }, [handleChildrenClick])

  if (!showMenu) {
    return (
      <Button onClick={() => setShowMenu(true)} {...triggerProps}>
        {triggerContents}
      </Button>
    )
  }

  return createPortal(
    <div className="mobile-menu" data-direction={direction}>
      <div
        className={`flex justify-${
          title ? 'between' : 'end'
        } items-center p-4 w-full`}
      >
        {title ? <div className="mobile-menu--title">{title}</div> : null}
        <Button onClick={() => setShowMenu(false)}>
          <Icon name="close_x" />
        </Button>
      </div>
      <div className="px-4" ref={childrenContainerRef}>
        {children}
      </div>
    </div>,
    document.querySelector('body')
  )
}

MobileMenu.defaultProps = {
  isOpen: false,
  direction: 'rtl',
  disableAutoClose: false,
}

MobileMenu.propTypes = {
  direction: PropTypes.string,
  isOpen: PropTypes.bool,
  triggerContents: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  disableAutoClose: PropTypes.bool,
  triggerProps: PropTypes.object,
  title: PropTypes.string,
}

export default MobileMenu
