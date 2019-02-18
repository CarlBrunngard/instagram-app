import React, { Component }  from 'react'
import styled from 'styled-components'
import Profiles from '../javascript/profiles'

const Wrapper = styled.div`
margin: auto;
  width: 40%;
  height: 50vh;
  border-radius: 10px;
  background-color:#6abfd1;
  overflow:auto;
  ::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`
const Listitem = styled.li `
border-bottom: 1px solid black;
padding-bottom: 2px;
padding-top: 2px;
`
const Inputstyle = styled.input`
float:left;
`



class listForm extends Component {

  render() {
    return (
      <Wrapper>
      <ol>
        <li><p>Press 5 then submit</p></li>
        <li><p>{this.props.name}</p></li>
        </ol>
      </Wrapper>
    );
  }
}

export default listForm



/*constructor(props) {
  super(props);
  this.state = null
}

componentDidMount(){
  this.setState({profiles:Profiles.profiles});
}

{this.state && this.state.profiles && this.state.profiles.map(d => <Listitem key={d.id}><Inputstyle type="checkbox"/> id:{d.id} url:<a target ="_blank" rel="" href={d.url}>{d.url}</a></Listitem>)}*/