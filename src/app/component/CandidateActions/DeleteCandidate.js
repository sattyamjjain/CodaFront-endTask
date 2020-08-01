import React from "react";
import {Button,Divider,Typography,Paper} from '@material-ui/core';
import axios from 'axios';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:90%;
    padding:15px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

export default class DeleteCandidate extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    async handleDelete (){
        axios.delete(`http://localhost:4000/candidate/${this.props.candidate.id}`).then(res=>console.log('edit result',res));
    }
  render() {
    return (
        <MainContainer>
            <Typography variant="h6">Delete the Candidate</Typography>
            <PaddingContainer/>
            <Divider/>
            <PaddingContainer/>
            <Typography variant="subtitle2">
                Are you sure you want to delete this Candidate?
            </Typography>
            <div style={{display:'flex',justifyContent:'flex-end',paddingTop:'10px'}}>
                <Button variant="contained">Close</Button>
                <PaddingContainer/>
                <Button variant="contained" color="primary" onClick={this.handleDelete}>Delete</Button>
            </div>
        </MainContainer>
    );
  }
}