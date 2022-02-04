import React from 'react'
import Icon from './Icon'
import Wrapper from './Wrapper'

export const generated = (props) => {
  return (
    <Wrapper>
      <Icon {...props} name="dao_preview" size={100} />
    </Wrapper>
  )
}

export default { title: 'Components/Icon' }
