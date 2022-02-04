import { render } from '@redwoodjs/testing'

import ModalContainer from './ModalContainer'

describe('ModalContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModalContainer />)
    }).not.toThrow()
  })
})
