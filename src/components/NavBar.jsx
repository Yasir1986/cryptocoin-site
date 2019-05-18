import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  btn: {
    color: "#ffffff",
    textDecoration: "none"
  }
  };

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <StyledNav>
          <Toolbar>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Button className={classes.btn}>Home</Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/about">
              <Button className={classes.btn}>About</Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/faq">
              <Button className={classes.btn}>F.A.Q</Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/contact">
              <Button className={classes.btn}>Contact</Button>
            </Link>
          </Toolbar>
        </StyledNav>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);

const StyledNav = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  color: white
`;


