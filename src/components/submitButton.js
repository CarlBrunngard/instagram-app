import React, {Component} from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
margin: auto;
  width: 25%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content:center;
  border-radius: 10px;
`
const ButtonText = styled.h2`
margin: 0;
color: white;
`
const SubmitButton = styled.button `
width: 140px;
height: 37px;
background: #37C4F1;
border-radius: 10px;
margin-left: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

class submitButton extends Component {
  render(){
    return(
      <Wrapper>
      <SubmitButton>
        <ButtonText>
          Submit
        </ButtonText>
      </SubmitButton>
      </Wrapper>
    )
  }
}

export default submitButton