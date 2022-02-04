import { useState } from 'react'
import styles from './Dropdown.module.scss'
import { ReactComponent as Carat } from '../../assets/icons/carat.svg'

const Dropdown = ({
  options,
  queryFilter,
  queryFilterFunction,
  category,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((v) => !v)
  }

  const handleSelection = (option) => {
    queryFilter === option ? queryFilterFunction() : queryFilterFunction(option)
    setIsOpen(false)
  }

  const handleKeyDown = (e, option, index) => {
    // jsx ally yelled at me to implement keyboard navigation
    let elements = document.querySelectorAll(
      `div[name="${category}--${styles.dropdownObject}"]`
    )
    if (e.key === 'Enter') {
      handleSelection(option)
      toggleOpen()
    }
    if (e.key === 'ArrowRight') {
      handleSelection(option)
    }
    if (e.key === 'ArrowUp' && index > 0) {
      let nextElement = elements[index - 1]
      nextElement.focus()
    }
    if (e.key === 'ArrowUp' && index === 0) {
      document
        .querySelectorAll(`div[name="${category}--${styles.dropdownLabel}"]`)[0]
        .focus()
    }
    if (e.key === 'ArrowDown' && index < options.length - 1) {
      let nextElement = elements[index + 1]
      nextElement.focus()
    }
  }

  const dropdownElementName = `${category}--${styles.dropdownObject}`
  const dropdownSelectorName = `${category}--${styles.dropdownLabel}`

  return (
    <div className={styles.dropdownWrapper}>
      <h4>{category}</h4>
      <div onMouseLeave={() => setIsOpen(false)} className={styles.dropdown}>
        <div
          className={styles.dropdownLabel}
          onClick={() => toggleOpen()}
          name={dropdownSelectorName}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'ArrowRight') {
              toggleOpen()
            }
            if (e.key === 'ArrowDown' && isOpen === true) {
              let nextElement = document.querySelectorAll(
                `[name="${dropdownElementName}"]`
              )[0]
              nextElement.focus()
            }
          }}
          role={'button'}
          tabIndex={0}
        >
          {typeof queryFilter !== 'undefined' ? (
            <>
              <span>{queryFilter}</span> <Carat />
            </>
          ) : (
            <>
              <span>{defaultValue ? defaultValue : 'Select'}</span> <Carat />
            </>
          )}
        </div>
        {isOpen && typeof options !== 'undefined' ? (
          <div className={styles.optionContainerWrap}>
            <div className={styles.optionContainer}>
              {options.map((option, index) => {
                return (
                  <div
                    key={index}
                    className={styles.dropdownObject}
                    role={'button'}
                    tabIndex={0}
                    name={`${dropdownElementName}`}
                    onClick={() => {
                      handleSelection(option)
                    }}
                    onKeyDown={(e) => handleKeyDown(e, option, index)}
                  >
                    {option}
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Dropdown
