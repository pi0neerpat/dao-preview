import { render } from '@redwoodjs/testing'

import SiteFooter from './SiteFooter'

describe('SiteFooter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SiteFooter />)
    }).not.toThrow()
  })
})
