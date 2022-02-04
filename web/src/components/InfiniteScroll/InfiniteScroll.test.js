import { render } from '@redwoodjs/testing/web'

import InfiniteScroll from './InfiniteScroll'

describe('InfiniteScroll', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InfiniteScroll />)
    }).not.toThrow()
  })
})
