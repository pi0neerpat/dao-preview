import { render } from '@redwoodjs/testing/web'

import Dropdown from './Dropdown'

describe('Dropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Dropdown />)
    }).not.toThrow()
  })
})
