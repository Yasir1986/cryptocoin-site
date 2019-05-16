import React from "react";
import styled from "styled-components"

class Options extends React.Component {
  render() {
    return (
      <Wrapper>
        <Style1>
        <h1>One COLUMS</h1>
        </Style1>
        <Style2>
        <h1>Two COLUMS</h1>
        </Style2>
       
      </Wrapper>
    );
  }
}

export default Options;

const Wrapper = styled.div`
    display: flex;
    flex-direction: colums;
    justify-content: space-evenly;
`;


const Style1 = styled.div`
      height: 400px;
      width: 350px;
      background-color: #555;
`;


const Style2 = styled.div`
      height: 400px;
      width: 350px;
      background-color: #555;
`;