import React from "react";
import styled from "styled-components"

class Options extends React.Component {
  render() {
    return (
      <Wrapper>
        <Style1>
          <h1>Plan 1</h1>
              <h4>min: 0.01 BTC</h4>
              <h4>max: 0.9 BTC</h4>
              <a href="https://blockstream.info/address/1Hi2nmnk6VuKsM6nenjRnE44rJhYgFZcCK"> <button>INVEST NOW</button></a>
        </Style1>
        <Style2>
          <h1>Plan 2</h1>
              <h4>min: 1 BTC</h4>
              <h4>max: 5 BTC</h4>
             <a href="https://blockstream.info/address/1Hi2nmnk6VuKsM6nenjRnE44rJhYgFZcCK"> <button>INVEST NOW</button> </a>
        </Style2>
       
      </Wrapper>
    );
  }
}

export default Options;

const Wrapper = styled.div`
    margin-top: 5%;
    display: flex;
    flex-direction: colums;
    justify-content: space-evenly;
`;


const Style1 = styled.div`
      text-align: center;
      height: 400px;
      width: 350px;
      background-color: #87CEFA;
`;


const Style2 = styled.div`
      text-align: center;
      height: 400px;
      width: 350px;
      background-color: #87CEFA;
`;