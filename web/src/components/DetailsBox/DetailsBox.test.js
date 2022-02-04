import { render } from '@redwoodjs/testing'

import DetailsBox from './DetailsBox'

describe('DetailsBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DetailsBox />)
    }).not.toThrow()
  })
})
