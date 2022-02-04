import { render } from '@redwoodjs/testing/web'

import LoadingSkeleton from './LoadingSkeleton'

describe('LoadingSkeleton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingSkeleton />)
    }).not.toThrow()
  })
})
