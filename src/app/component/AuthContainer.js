import React from "react";
import {Button,Toolbar,Typography} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignupContainer';

const MainContainer = styled.div`
    width:90%;
    height:60vh;
    padding:5vh;
    padding-top:2vh;
`;

export default class AuthContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            displayComponent:'login'
        }
    }

    selectedComponent(val){
        this.setState({
            displayComponent:val
        })
    }

  render() {
      const {displayComponent} = this.state;
    return (
        <MainContainer>
            {
                displayComponent==='login' ? <LoginContainer displayedComponent={this.selectedComponent.bind(this)}/> : (
                    displayComponent==='signup' ? <SignupContainer displayedComponent={this.selectedComponent.bind(this)}/>: null
                )
            }
        </MainContainer>
    );
  }
}