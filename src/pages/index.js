import React,{Component} from 'react'
import styled from 'styled-components'
import SelectButtons from '../components/selectButtons'
import PrevNextButtons from '../components/prevNextButtons'
import ListForm from '../components/listForm'
import SubmitButton from '../components/submitButton'
import layout from '../components/layout.css'


const Wrapper = styled.div`
text-align : center;
`
const HeaderText = styled.h1`
margin: 0;
padding-bottom: 50px;
color: white;
padding-top: 50px;
font-size:
`


class IndexHeader extends Component {
  constructor(props) {
    super(props);
 this.state = {
   name: "",
   offset: 0,
   limit: 5,
 };
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
this.setState({
  name: "Ohh i see you clicked the button"
});
    }

render(){
  return(
    <Wrapper>
    <HeaderText>
    Instagram Profiles
    </HeaderText>
    <SelectButtons handleClick={this.handleClick}/>
    <PrevNextButtons/>
    <ListForm name={this.state.name}/>
    <SubmitButton/>
    </Wrapper>
  )
}
}


export default IndexHeader
