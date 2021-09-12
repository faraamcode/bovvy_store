import React from 'react'
import styled from 'styled-components'
export const Loading = () => {
  return (
    <Wrapper>
      <h5>Loading....</h5>
    </Wrapper>
  )
}
export const ErrorLoading = () => {
  return (
    <Wrapper>
      <h5>Error occured...</h5>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  min-height: 60vh;
  h5 {
    font-size: 40px;
    text-align: center;
  }
`
