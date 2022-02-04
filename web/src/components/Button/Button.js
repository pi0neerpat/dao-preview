import { Link } from '@redwoodjs/router'
import PropTypes from 'prop-types'

const Button = ({
  children,
  label,
  variant,
  onClick,
  size,
  textColor,
  isSelected,
  className,
  fluid,
  to,
  href,
  alt,
  ...rest
}) => {
  const Element = href ? 'a' : 'button'

  if (to) {
    return (
      <Link
        className={`button ${className}`}
        onClick={() => onClick()}
        data-variant={variant}
        data-size={size}
        data-textcolor={textColor}
        data-selected={isSelected}
        data-fluid={String(fluid)}
        to={to}
        {...rest}
      >
        {label || children}
      </Link>
    )
  }

  return (
    <Element
      className={`button ${className}`}
      onClick={() => onClick()}
      data-variant={variant}
      data-size={size}
      data-textcolor={textColor}
      data-selected={String(isSelected)}
      data-fluid={String(fluid)}
      href={href || ''}
      alt={alt || ''}
      {...rest}
    >
      {label || children}
    </Element>
  )
}

Button.defaultProps = {
  variant: 'transparent',
  size: 'regular',
  textColor: 'white',
  isSelected: false,
  className: '',
  fluid: false,
  onClick: () => {},
}

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  textColor: PropTypes.string,
  isSelected: PropTypes.bool,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  to: PropTypes.any,
  href: PropTypes.string,
  alt: PropTypes.string,
}

export default Button
