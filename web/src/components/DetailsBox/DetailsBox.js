import PropTypes from 'prop-types'

const DetailsBox = ({ items, heading }) => {
  return (
    <div
      className="detailsBox flex flex-col"
      style={{ minHeight: items.length > 0 ? 0 : 120 }}
    >
      <div className="detailsBox__heading-wrapper">
        <p className="detailsBox__heading-text">{heading}</p>
      </div>
      <div className="detailsBox__items-wrapper">
        {items.map((item, i) => (
          <p className="detailsBox__item" key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

DetailsBox.defaultProps = {
  items: [],
  heading: 'Title',
}
DetailsBox.propTypes = {
  items: PropTypes.array,
  heading: PropTypes.string,
}

export default DetailsBox
