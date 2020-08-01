import React from "react";
import {Button,TextField,Typography} from '@material-ui/core';
import { Formik } from 'formik';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:90%;
    height:60vh;
    padding:15px;
`;

const FormContainer = styled.div`
`;

export default class AddEditContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

     handleSubmit = (formValues)=>{
        if(!this.state.isEdit){
            formValues.id=uuidv4();
            console.log('---',formValues)
            axios.post(`http://localhost:4000/candidate`,formValues).then(res=>console.log('add result',res));
        }else{
            axios.put(`http://localhost:4000/candidate/${this.props.candidate.id}`,formValues).then(res=>console.log('edit result',res));
        }
    }
  render() {
    return (
        <MainContainer>
            <FormContainer>
                <Formik
                    initialValues={{ 
                        name:this.state.isEdit?this.props.candidate.name:'',
                        contactNo:this.state.isEdit?this.props.candidate.mobile_no:'',
                        email:this.state.isEdit?this.props.candidate.email:'',
                        level:this.state.isEdit?this.props.candidate.level:'',
                    }}
                    onSubmit={this.handleSubmit}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    id="standard-basic" 
                                    fullWidth
                                    label="Name"
                                    type="name"
                                    name="name"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    id="standard-basic" 
                                    fullWidth
                                    label="Contact No."
                                    type="contactNo"
                                    name="contactNo"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contactNo}
                                />
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    id="standard-basic" 
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    name="email"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    id="standard-basic" 
                                    fullWidth
                                    label="Expertise Level"
                                    type="level"
                                    name="level"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.level}
                                />
                            </div>
                            <div style={{paddingTop:'20px'}}>
                                <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary">
                                    Add Candidate
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </FormContainer>
        </MainContainer>
    );
  }
}