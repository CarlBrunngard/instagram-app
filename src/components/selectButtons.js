import React, {Component} from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
margin: auto;
  width: 25%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: #6abfd1;
  border-radius: 10px;
`
const Buttons = styled.button`
float: left;
width: 68px;
height: 37px;
background: #37C4F1;
border-radius: 10px;
margin-right: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const ButtonText = styled.h3`
margin: 0;
color: white;
`
const SubmitButton = styled.button `
width: 68px;
height: 37px;
background: #37C4F1;
border-radius: 10px;
margin-left: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


class SelectButtons extends Component {
  render() {
    return (
      <Wrapper>
      <Buttons onClick={this.props.handleClick}>
        <ButtonText>
          5
        </ButtonText>
      </Buttons>
      <Buttons>
      <ButtonText>
          10
        </ButtonText>
      </Buttons>
      <Buttons>
      <ButtonText>
          20
        </ButtonText>
      </Buttons>
      <Buttons>
      <ButtonText>
          50
        </ButtonText>
      </Buttons>
      <SubmitButton>
        <ButtonText>
          Submit
        </ButtonText>
      </SubmitButton>
      </Wrapper>
    );
  }
}

export default SelectButtons