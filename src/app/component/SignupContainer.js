import React from "react";
import {Button,TextField,Typography} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import { Formik } from 'formik';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    padding-top:5%;
`;

const FormContainer = styled.div`
`;

export default class SignupContainer extends React.Component {

    goToPage(val){
        this.props.displayedComponent(val);
    }

    render() {
        return (
            <MainContainer>
                <Typography variant="h5" style={{textAlign:'center'}}>
                    Sign up
                </Typography>
                <FormContainer>
                    <Formik
                        initialValues={{ username:'',email:'',password:''}}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
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
                                        label="Username"
                                        type="username"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <TextField 
                                        id="standard-basic" 
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <TextField 
                                        id="standard-basic" 
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <Typography variant="caption">
                                        I agree to the Privacy Policy and Terms and Conditions.
                                    </Typography>
                                </div>
                                <div style={{paddingTop:'20px'}}>
                                    <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary" style={{textTransform:'capitalize'}}>
                                        Sign up with Email
                                    </Button>
                                </div>
                                <div style={{paddingTop:'10px',textAlign:'center'}}>
                                    <Typography variant="subtitle1">
                                        Already have an account? <Button variant="text" onClick={this.goToPage.bind(this,'login')} style={{textTransform:'capitalize'}}>Login.</Button>
                                    </Typography>
                                </div>
                            </form>
                        )}
                    </Formik>
                </FormContainer>
            </MainContainer>
        );
    }
}