import { render } from '@redwoodjs/testing'

import Icon from './Icon'

describe('Icon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Icon />)
    }).not.toThrow()
  })
})
