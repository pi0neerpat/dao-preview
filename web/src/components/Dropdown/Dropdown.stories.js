import Dropdown from './Dropdown'

export const generated = () => {
  return <Dropdown category={'Opener'} options={moveCounts} />
}

export default { title: 'Components/Dropdown' }

const moveCounts = ['< 10', '10 - 49', '50 - 99', '100 - 199', '200+']
