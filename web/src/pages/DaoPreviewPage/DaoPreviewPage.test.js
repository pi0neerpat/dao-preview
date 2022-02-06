import { render } from '@redwoodjs/testing/web'

import DaoPreviewPage from './DaoPreviewPage'

describe('DaoPreviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DaoPreviewPage />)
    }).not.toThrow()
  })
})
