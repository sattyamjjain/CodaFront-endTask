import React from "react";
import {Table,TableBody,Paper,TableContainer,TableHead,Typography,TableCell,Modal,TableRow,Link,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import axios from 'axios';
import styled from 'styled-components';
import AddEditCandidate from './CandidateActions/AddEditCandidate';
import DeleteCandidate from './CandidateActions/DeleteCandidate';

const ADD = 'add';
const DELETE='delete';
const EDIT = 'edit'

const MainContainer = styled.div`
    padding:15vh;
    padding-top:10vh;
`;

const HeadContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom:5vh;
`;

const SubMainContainer = styled.div`
    width:100%;
    padding-top:30px;
    display:flex;
    justify-content:space-between;
`;

const LinkContainer = styled.div`
    display:flex;
    justify-content:center;
`;

class AdminPageContainer extends React.Component {
  constructor(props){
      super(props);
      this.state={
          visibleActionPopup:null,
          candidateList:[],
          candidate:null,
          isEdit:false
      }
      this.handleActionPopupClose = this.handleActionPopupClose.bind(this);
  }

  async componentDidMount(){
    const result = await axios.get(`http://localhost:4000/candidate`);

    this.setState({
      candidateList:result.data
    })
  }

  onActionClickHandler(action,data) {
  switch (action) {
      case DELETE:
          this.handleDeleteAction(data);
          break;
      case EDIT:
          this.handleEditAction(data);
          break;
      case ADD:
          this.handleAddAction();
          break;
      default:
          break;
      }
  }

  handleDeleteAction(data) {
      this.setState({
          candidate:data,
          visibleActionPopup:DELETE
      })
  }

  handleEditAction(data) {
      this.setState({
          isEdit:true,
          candidate:data,
          visibleActionPopup:EDIT
      })
  }

  handleAddAction() {
      this.setState({
          visibleActionPopup:ADD
      })
  }

  handleActionPopupClose() {
      this.setState({
          visibleActionPopup:null
      })
  }

  render() {

    console.log('result',this.state.candidateList)
    const deleteBody = (
        <Paper style={{width:'60vh',height:'25vh'}}>
            <DeleteCandidate candidate={this.state.candidate}/>
        </Paper>
    );

    const addEditBody = (
        <Paper style={{width:'70vh',height:'70vh'}}>
            <AddEditCandidate candidate={this.state.candidate} isEdit={this.state.isEdit}/>
        </Paper>
    );

    return (
        <MainContainer>
            <HeadContainer>
                <Typography variant="h5">Candidates List</Typography>
                <Button variant="contained" color="primary" onClick={this.onActionClickHandler.bind(this,ADD,null)}>Add New Candidate</Button>
            </HeadContainer>
            <SubMainContainer>
              <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                      <TableRow>
                          <TableCell align="center">Name</TableCell>
                          <TableCell align="center">Email</TableCell>
                          <TableCell align="center">Contact No.</TableCell>
                          <TableCell align="center">Levels</TableCell>
                          <TableCell align="center">Votes</TableCell>
                          <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.candidateList.map(candidate=>(
                        <TableRow key={candidate.id}>
                            <TableCell align="center">
                                {candidate.name}
                            </TableCell>
                            <TableCell align="center">{candidate.email}</TableCell>
                            <TableCell align="center">{candidate.mobile_no}</TableCell>
                            <TableCell align="center">{candidate.level}</TableCell>
                            <TableCell align="center">{candidate.votes}</TableCell>
                            <TableCell align="center">
                                <LinkContainer>
                                    <Button onClick={this.onActionClickHandler.bind(this,ADD,candidate)}>
                                        <FeatherIcon.Edit
                                            color="#000000"
                                            size={24}
                                        />
                                    </Button>
                                    <Button onClick={this.onActionClickHandler.bind(this,DELETE,candidate)}>
                                        <FeatherIcon.Trash2
                                            color="#000000"
                                            size={24}
                                        />
                                    </Button>
                                </LinkContainer>
                            </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
            </TableContainer>
          </SubMainContainer>
          <Modal
              open={this.state.visibleActionPopup===DELETE}
              onClose={this.handleActionPopupClose}
              style={{display:'flex',justifyContent:'center',top:'30%',bottom:'30%'}}
          >
              {deleteBody}
          </Modal>
          <Modal
              open={this.state.visibleActionPopup===ADD}
              onClose={this.handleActionPopupClose}
              style={{display:'flex',justifyContent:'center',top:'15%',bottom:'30%'}}
          >
              {addEditBody}
          </Modal>
        </MainContainer>
    );
  }
}

export default AdminPageContainer;