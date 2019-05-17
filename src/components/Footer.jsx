import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles";


const styles = {
  li: {
    color: "#ffffff",
    textDecoration: "none"
  }
  
  };

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
          <Styledlist>
              <a style={{ textDecoration: 'none' }} href="/"><li className={classes.li}>Home</li></a>
               <Link style={{ textDecoration: 'none' }} to="/about"><li className={classes.li}>About</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/faq"><li className={classes.li}>F.A.Q</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/contact"><li className={classes.li}>Contact</li></Link>
            </Styledlist>
            <StyledP>
                &copy; Copyright 2018-2019, DoubleYourBTC
            </StyledP>
      </Wrapper>
    );
  }
}


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);



const Wrapper = styled.div`
    color: white;
    background-color: #3F51B5;
    height: 110px;
    width: 100%;
    bottom: 0;
    top: 0
`;

const Styledlist = styled.div`
    padding: 1.5%;
    margin-top: 10px;
    list-style: none;
    display: flex;
    justify-content: space-evenly;   
    text-decoration: none;
`;

const StyledP = styled.p`
    text-align: center;
`;

