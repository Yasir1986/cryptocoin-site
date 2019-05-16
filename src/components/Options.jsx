import React from "react";
import styled from "styled-components"

class Options extends React.Component {
  render() {
    return (
      <Wrapper>
        <Style1>
          <h1>Option 1</h1>
              <h4>min: 0.01 BTC</h4>
              <h4>max: 0.9 BTC</h4>
              <button>INVEST NOW</button>
        </Style1>
        <Style2>
          <h1>Options 2</h1>
              <h4>min: 1 BTC</h4>
              <h4>max: 5 BTC</h4>
              <button>INVEST NOW</button>
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
      background-color: #87CEFA;
`;


const Style2 = styled.div`
      height: 400px;
      width: 350px;
      background-color: #87CEFA;
`;