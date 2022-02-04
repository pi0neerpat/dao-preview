import { render } from '@redwoodjs/testing/web'

import Header from './Header'

describe('Header', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Header />)
    }).not.toThrow()
  })
})
