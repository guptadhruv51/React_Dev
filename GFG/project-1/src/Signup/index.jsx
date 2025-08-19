import React, { useEffect, useReducer, useRef, useState } from "react";
import {Button, Card,CardBody, CardFooter, CardHeader, Col, Container, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import './style.css';
import { initialState, signupReducer } from "./signupReducer";
const Signup=()=>
{
  // const[name,setname]=useState("");
  // const[email,setemail]=useState("");
  // const[username,setusername]=useState("");
  // const[password,setpassword]=useState("");

  const [state,dispatch]=useReducer(signupReducer,initialState);
  const {name,email,password,username}=state;
  const[showPassword,setShowPassword]=useState(false);
  const nameRef=useRef(null);
  // const isNameValid=namePattern.test(name);
  // const isusernamevalid=usernamePattern.test(username);
  // const isemailValid=emailPattern.test(email);

  const togglePwd=()=>
  {
    setShowPassword(!showPassword);
    // const currentType=passWordRef.current.type;
    // if(currentType==='password')
    //   passWordRef.current.type='text'
    // else
    // passWordRef.current.type='password'
  }
  useEffect(()=>
  {
    nameRef.current.focus();
  },[])


  const isPasswordvalid=Object.values(password.validation).every(Boolean);
  const isFormvalid=name.isValid&& email.isValid &&username.isValid&isPasswordvalid;


  return (
    <Container fluid>
      <Row>
      <Col lg={{span:4, offset:4}} md={{span:6, offset:3}} sm={{span:8, offset:2}} xs={{span:10, offset:1}}>
      
      <Card className="mt-5 Signup">
        <CardHeader>
          Signup
        </CardHeader>
        <CardBody>
          <FormGroup controlId="name" className="mb-3">
            <FormLabel>Name</FormLabel>
            <FormControl placeholder="Enter Name" ref={nameRef}onChange={e=>dispatch({type:'name',payload:e.target.value})}/>
            {name.value && !name.isValid && <span className="text-danger"> Name is Invalid </span>}
            </FormGroup>
            <FormGroup controlId="Username" className="mb-3">
            <FormLabel>UserName</FormLabel>
            <FormControl placeholder="Enter username" onChange={e=>dispatch({type:'username',payload:e.target.value})}></FormControl>
            {username.value && !username.isValid && <span className="text-danger"> Username is Invalid </span>}
            
          </FormGroup>
          <FormGroup controlId="email" className="mb-3">
            <FormLabel>Email</FormLabel>
            <FormControl placeholder="Enter a valid Email" onChange={e=>dispatch({type:'email',payload:e.target.value})}></FormControl>
            {email.value && !email.isValid && <span className="text-danger"> Email is Invalid </span>}
          </FormGroup>
          
          <FormGroup controlId="password" className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl  autoComplete={false} placeholder="Enter password" type={showPassword?'text':'password'}
            onChange={e=>dispatch({type:'password',payload:e.target.value})}></FormControl>
            {password.value && !isPasswordvalid && <ul  className="small mt-3">
            {/* User types → dispatch updates reducer → reducer runs regex checks → state updates → UI re-renders showing which rules are met */}
              
              <li className={password.validation.hasLowerCase?'text-success':'text-danger'}>At least one lowercase letter</li>
              <li className={password.validation.hasUpperCase?'text-success':'text-danger'}>At least one upper case</li>
              <li className={password.validation.hasDigit?'text-success':'text-danger'}>At least one digit</li>
              <li className={password.validation.hasSpecialSymbol?'text-success':'text-danger'}>At least one special symbol</li>
              <li className={password.validation.minLengthReq?'text-success':'text-danger'}>At least 8 characters</li>
            </ul>}
          </FormGroup>
          {/* <FormGroup controlId="confirm-password" className="mb-3">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl placeholder="Confirm Password" type="password"></FormControl>
            
          </FormGroup> */}
        </CardBody>
        <CardFooter className="d-flex justify-content-center">
          <Button variant="outline-primary" disabled={!isFormvalid}> Signup</Button>
          <Button variant="outline-primary" onClick={togglePwd}> Toggle Password</Button>
          </CardFooter>
      </Card>
      
      </Col>
      </Row>
    </Container>
  )
}
export default Signup