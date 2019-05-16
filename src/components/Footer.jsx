import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
          <Styledlist>
              <a href="/"><li>Home</li></a>
               <Link to="/about"> <li>About</li></Link>
               <Link to="/faq">    <li>F.A.Q</li></Link>
               <Link to="/contact"><li>Contact</li></Link>
            </Styledlist>
            <StyledP>
            &copy; Copyright 2018-2019, DoubleYourBTC
            </StyledP>
      </Wrapper>
    );
  }
}

export default Footer;

const Wrapper = styled.div`
    position: absolute;
    background-color: #3F51B5;
    height: 12%;
    width: 100%;
`;

const Styledlist = styled.div`
    margin-top: 10px;
    list-style: none;
    display: flex;
    justify-content: space-evenly;   
    text-decoration: none;
`;

const StyledP = styled.p`
    text-align: center;
`;

