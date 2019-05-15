import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
      <StyledNav>
          <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">F.A.Q</Button>
          <Button color="inherit">Contact</Button>
          </Toolbar>
          </StyledNav>
      </AppBar>
     
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

const StyledNav = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
`;