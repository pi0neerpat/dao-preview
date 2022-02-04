import PropTypes from 'prop-types'
import { getColorFromTheme } from 'src/utils/helpers'

const getSpacingStyles = (props) => {
  return {
    paddingBottom: props.pb,
    paddingTop: props.pt,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    marginBottom: props.mb,
    marginTop: props.mt,
    marginLeft: props.ml,
    marginRight: props.mr,
  }
}

const typographyPropTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const H1 = ({
  color: _color,
  children,
  fontSize,
  fontWeight,
  ...rest
}) => {
  const color = _color && getColorFromTheme(_color)
  const spacing = getSpacingStyles(rest)
  return <h1 style={{ color, fontSize, fontWeight, ...spacing }}>{children}</h1>
}
H1.propTypes = { ...typographyPropTypes }

export const H2 = ({
  color: _color,
  children,
  fontSize,
  fontWeight,
  ...rest
}) => {
  const color = _color && getColorFromTheme(_color)
  const spacing = getSpacingStyles(rest)
  return <h2 style={{ color, fontSize, fontWeight, ...spacing }}>{children}</h2>
}
H2.propTypes = { ...typographyPropTypes }

export const H3 = ({
  color: _color,
  children,
  fontSize,
  fontWeight,
  ...rest
}) => {
  const color = _color && getColorFromTheme(_color)
  const spacing = getSpacingStyles(rest)
  return <h3 style={{ color, fontSize, fontWeight, ...spacing }}>{children}</h3>
}
H3.propTypes = { ...typographyPropTypes }

export const P = ({
  color: _color,
  children,
  fontSize,
  fontWeight,
  ...rest
}) => {
  const color = _color && getColorFromTheme(_color)
  const spacing = getSpacingStyles(rest)
  return <p style={{ color, fontSize, fontWeight, ...spacing }}>{children}</p>
}
P.propTypes = { ...typographyPropTypes }

export const Span = ({
  color: _color,
  children,
  fontSize,
  fontWeight,
  ...rest
}) => {
  const color = _color && getColorFromTheme(_color)
  const spacing = getSpacingStyles(rest)
  return (
    <span style={{ color, fontSize, fontWeight, ...spacing }}>{children}</span>
  )
}
P.propTypes = { ...typographyPropTypes }

const Typography = () => {}

export default Typography
