import React from "react";
import {Button, Card,CardBody, CardFooter, CardHeader, Col, Container, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
// import './style.css';
const Login=()=>
{

  return (
    <Container fluid>
      <Row>
      <Col lg={{span:4, offset:4}} md={{span:6, offset:3}} sm={{span:8, offset:2}} xs={{span:10, offset:1}}>
      
      <Card className="mt-5 Login">
        <CardHeader>
          Login
        </CardHeader>
        <CardBody>
          
            <FormGroup controlId="Username" className="mb-3">
            <FormLabel>UserName</FormLabel>
            <FormControl placeholder="Enter username"></FormControl>
            
          </FormGroup>
          
          <FormGroup controlId="password" className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl placeholder="Enter password" type="password"></FormControl>
            
          </FormGroup>
        
        </CardBody>
        <CardFooter className="d-flex justify-content-center">
          <Button variant="outline-primary"> Login</Button>
          </CardFooter>
      </Card>
      
      </Col>
      </Row>
    </Container>
  )
}
export default Login