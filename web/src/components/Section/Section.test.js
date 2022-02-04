import { render } from '@redwoodjs/testing/web'

import Section from './Section'

describe('Section', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Section />)
    }).not.toThrow()
  })
})
