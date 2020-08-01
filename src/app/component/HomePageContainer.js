import React from "react";
import {Typography,ExpansionPanel,ExpansionPanelDetails,ExpansionPanelSummary} from '@material-ui/core';
import {Table,TableBody,Paper,TableContainer,TableCell,TableRow,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import axios from 'axios';
import styled from 'styled-components';

const MainContainer = styled.div`
    width:80%;
    padding:20vh;
    padding-top:15vh;
`;

class HomePageContainer extends React.Component {
  constructor(props){
      super(props);
      this.state={
          visibleActionPopup:null,
          candidateList:[],
          candidate:null,
          isEdit:false
      }
  }

  async componentDidMount(){
    const result = await axios.get(`http://localhost:4000/candidate`);

    this.setState({
      candidateList:result.data
    })
  }

  async handleVote(candidate){
    let prevVotes;
    this.state.candidateList.map(cand=>{
      if(cand.id==candidate.id){
        prevVotes = cand.votes
      }
    })
    console.log('pre',prevVotes)
    const formValues={
      votes:(parseInt(prevVotes)+1).toString()
    }
    await axios.put(`http://localhost:4000/candidate/${candidate.id}`,formValues);
  }

  render() {
    return (
        <MainContainer>
          {this.state.candidateList.map(candidate=>(
            <ExpansionPanel key={candidate.id}>
              <ExpansionPanelSummary
              expandIcon={<FeatherIcon.ChevronDown />}
              id="panel1a-header"
              style={{paddingLeft:'5vh'}}
              >
              <div style={{display:'flex',justifyContent:'space-between'}}>
                  <Typography variant="h6">
                      {candidate.name?candidate.name:'-'}
                  </Typography>
                  <Typography variant="h5" style={{paddingLeft:'10vh'}}>
                      {candidate.votes}
                  </Typography>
              </div>
              </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow key={candidate.id}>
                                <TableCell align="center">{candidate.email}</TableCell>
                                <TableCell align="center">{candidate.mobile_no}</TableCell>
                                <TableCell align="center">{candidate.level}</TableCell>
                                <TableCell align="center">{candidate.votes}</TableCell>
                                <TableCell align="center">
                                    <Button onClick={this.handleVote.bind(this,candidate)}>
                                        vote
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          ))}
        </MainContainer>
    );
  }
}

export default HomePageContainer;