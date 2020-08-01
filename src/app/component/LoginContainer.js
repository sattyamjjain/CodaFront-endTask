import React from "react";
import {Button,TextField,Typography,FormControlLabel,Checkbox} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    padding-top:10%;
`;

const FormContainer = styled.div`
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

export default class LoginContainer extends React.Component {
 
    goToPage(val){
        this.props.displayedComponent(val);
    }

    render() {
        return (
            <MainContainer>
                <Typography variant="h5" style={{textAlign:'center'}}>
                    Login to your account
                </Typography>
                <Typography variant="subtitle1" style={{textAlign:'center'}}>
                    Dont have an account? <Button variant="text" onClick={this.goToPage.bind(this,'signup')} style={{textTransform:'capitalize'}}>Signup now.</Button>
                </Typography>
                <PaddingContainer/>
                <FormContainer>
                    <Formik
                        initialValues={{ email:'',password:''}}
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
                                <div style={{paddingTop:'20px'}}>
                                    <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary" style={{textTransform:'capitalize'}}>
                                        Login with Email
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