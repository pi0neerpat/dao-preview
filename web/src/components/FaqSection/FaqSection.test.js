import { render } from '@redwoodjs/testing'

import FaqSection from './FaqSection'

describe('FaqSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FaqSection />)
    }).not.toThrow()
  })
})
