import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
          <Styledlist>
              <Link to="/"><li>Home</li></Link>
               <Link to="/about"> <li>About</li></Link>
               <Link to="/faq">    <li>F.A.Q</li></Link>
               <Link to="/contact"><li>Contact</li></Link>
            </Styledlist>
            <p>copyright</p>
      </Wrapper>
    );
  }
}

export default Footer;

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
`;

const Styledlist = styled.div`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
`;

