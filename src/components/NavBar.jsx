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
    flexGrow: 1
  },
  };

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <StyledNav>
          <Toolbar>
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/about">
              {" "}
              <Button>About</Button>
            </Link>
            <Link to="/faq">
              {" "}
              <Button>F.A.Q</Button>
            </Link>
            <Link to="/contact">
              {" "}
              <Button>Contact</Button>
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
`;


