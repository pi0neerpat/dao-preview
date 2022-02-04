import { render } from '@redwoodjs/testing/web'

import Typography from './Typography'

describe('Typography', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Typography />)
    }).not.toThrow()
  })
})
