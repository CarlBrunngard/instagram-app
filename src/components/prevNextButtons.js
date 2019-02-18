import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
margin: auto;
  width: 25%;
  height: 7vh;
  display: inline-block;
  border-radius: 10px;
`
const ButtonText = styled.h3`
margin: 0;
color: white;
`
const SubmitButtonPrev = styled.button `
float: left;
margin-top: 10px;
width: 68px;
height: 37px;
background: #37C4F1;
border-radius: 10px;
`
const SubmitButtonNext = styled.button `
float: right;
margin-top: 10px;
width: 68px;
height: 37px;
background: #37C4F1;
border-radius: 10px;
`

const PrevNextButtons = () => (
  <Wrapper>
<SubmitButtonPrev>
  <ButtonText>
    Prev
  </ButtonText>
</SubmitButtonPrev>
<SubmitButtonNext>
  <ButtonText>
    Next
  </ButtonText>
</SubmitButtonNext>
</Wrapper>
)

export default PrevNextButtons