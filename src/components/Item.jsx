import React from 'react'
import styledComponents from 'styled-components'

export const Item = () => {
  return (
      <Wrapper>
          item
      </Wrapper>
  )
}

const Wrapper = styledComponents.div`
background-color: yellow;
width: 50%;

`