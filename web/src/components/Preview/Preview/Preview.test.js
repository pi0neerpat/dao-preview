import { render } from '@redwoodjs/testing/web'

import Preview from './Preview'

describe('Preview', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Preview />)
    }).not.toThrow()
  })
})
