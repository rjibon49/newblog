import { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner, Toast } from 'react-bootstrap';
import { TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import ssi from '../../src/images/Users/studentSignin.png';
import Image from 'next/image'
import {fwfasignup} from '../../actions/auth'


const SignupComponents = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loding: false,
        message: '',
        showFrom: true
    });

    const { name, email, password, error, loding, message, showForm } = values;

    const handleSignupSubmit = e => {
        e.preventDefault();
        // console.table ({name, email, password, error, loding, message, showForm});
        setValues({...values, loding: true, error: false})
        const user =  {name, email, password}

        fwfasignup(user).then(data => {
            if(data?.error) {
                setValues({...values, error: data.error, loding: false})
            }
            else {
                setValues({...values, name: '', email: '', password: '', error: '', loding: false, message: data?.message, showFrom: false})
            }
        });
    };

    const handleOnBlur = name => e => {
        setValues({...values, error: false, [name]: e.target.value });
    };

    // const [loginData, setLoginData] = useState({});

    // const handleOnBlur = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = { ...loginData };
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData);
    //   };
    
    //   const handleLoginSubmit = e => {
    //       loginUser(loginData.email, loginData.password, location, navigate);
    //       e.preventDefault();
    //   };


    const signupForm = () => {
        return (
            <Container >
            <Row className='abtevt'>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} className='user-leftside'>
                    <div className='green-bg p-5'>
                        <Image src={ssi} alt="SignupImage" className='images ' />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className='formside py-5 my-5'>
                            <h4 className='fw-bold mb-5 text-center'>Signup Admin Account</h4>
                            <div className='d-flex justify-content-evenly'>
                                <Button className='user-btn'><i className="fab fa-google mx-2"></i> Continue With Google</Button>
                                <Button className='user-btn'><i className="fab fa-facebook mx-2"></i> Continue With Facebook</Button>
                            </div>
                        
                        <Divider className='my-3'>OR</Divider>
                        
                        
                        <Form className='commentFrom' onSubmit={handleSignupSubmit}>
                            <Row className="mb-3">
                        
                                <Form.Group className="mb-3">
                                    <TextField
                                        id="demo-helper-text-aligned"
                                        label="Enter Your Full Name"
                                        size="small"
                                        className='s-comment-form'
                                        fullWidth
                                        onChange={handleOnBlur('name')}
                                        value = {name}
                                        // name="email"
                                        type="text"
                            />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <TextField
                                        id="demo-helper-text-aligned"
                                        label="Enter Your E-mail Address"
                                        size="small"
                                        className='s-comment-form'
                                        fullWidth
                                        onChange={handleOnBlur('email')}
                                        value = {email}
                                        // name="email"
                                        type="email"
                            />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <TextField
                                        id="demo-helper-text-aligned"
                                        label="Enter Your Password"
                                        size="small"
                                        className='s-comment-form'
                                        fullWidth
                                        onChange={handleOnBlur('password')}
                                        value = {password}
                                        // name="password"
                                        type="password"
                            />
                                </Form.Group>
                                
                            </Row>
                            <div className='text-center'>
                                <Button className='userbtn' type="submit" >Signup</Button>
                                
                            </div>
                        </Form> 
                        {/* {isLoding && <Spinner animation="border" />}
                        {
                            user?.email && <Toast className="text-center bg-success text-white mx-auto">
                            <Toast.Body><strong>Login Successfully</strong></Toast.Body>
                            </Toast>
                        }
                        {
                            authError && <Toast className="text-center bg-danger text-white mx-auto" >
                            <Toast.Body><strong>Login Error</strong></Toast.Body>
                            </Toast>
                        } */}
                    </div>
                </Col>
            </Row>
            {/* <GoToTop /> */}
        </Container>
        );
    };

    return (
        <>
            {signupForm()}
        </>
    );
};

export default SignupComponents;