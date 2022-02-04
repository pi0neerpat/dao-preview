import DetailsBox from './DetailsBox'

const Wrapper = ({ children }) => (
  <div style={{ width: 300, maxWidth: '100%' }}>{children}</div>
)

const customItem = <span style={{ color: 'green' }}>special-item</span>

const heading = 'Title'
const items = ['first-item', 'second-item', customItem]

export const generated = () => {
  return (
    <Wrapper>
      <DetailsBox heading={heading} items={items} />
    </Wrapper>
  )
}

export default { title: 'Components/DetailsBox' }
