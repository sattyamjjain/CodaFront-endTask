/* eslint-disable no-sequences */
import React from "react";
import styled from 'styled-components';
import {AppBar,Modal,Toolbar,Button} from '@material-ui/core'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AuthContainer from './AuthContainer';

const AUTH = 'auth';

const HeaderMainContainer = styled.div`
  position: fixed;
  width:100%;
  z-index:999999;
`;

const HeaderContainer = styled.div`
  background-color:red;
`;

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width:'100vh',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  },
  button:{
    textTransform:'capitalize',
    '&:focus':{
      oultine:'none',
      border:'none'
    }
  }
}));

export default function Header () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [visibleActionPopup, setVisibleActionPopup] = React.useState(null);

  const authBody = (
    <div style={modalStyle} className={classes.paper}>
      <AuthContainer/>
    </div>
  );

  function onActionClickHandler(action) {
    switch (action) {
      case AUTH:
        handleLoginAction();
        break;
      default:
        break;
    }
  }

  function handleLoginAction() {
    setVisibleActionPopup(AUTH);
  }

  function handleActionPopupClose() {
    setVisibleActionPopup(null)
  }

  return (
    <HeaderMainContainer>
      <HeaderContainer>
        <AppBar position="static">
          <Toolbar style={{backgroundColor:'#EE6622',justifyContent:'flex-end'}}>
              <Button color="inherit" className={classes.button} onClick={()=>onActionClickHandler(AUTH)}>Login</Button>
              <Button color="inherit" className={classes.button} onClick={()=>onActionClickHandler(AUTH)}>Admin</Button>
          </Toolbar>
        </AppBar>
      </HeaderContainer>
      <Modal
        open={visibleActionPopup===AUTH}
        onClose={handleActionPopupClose}
      >
        {authBody}
      </Modal>
    </HeaderMainContainer>
  );
};
