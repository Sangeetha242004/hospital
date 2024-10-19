import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const[input,setInput]=useState({
    email:'',
    password:''
  })

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setInput((prev=>({...prev,[name]:value})))
  }

  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.post('http://localhost:4000/manage/login',input)
    .then((res)=>{  
      if(res.data){
          console.log(res.data)
          alert("logined Successfully")
          setInput({email:'',password:''})
          navigate("/dashboard")
      }    
  })
}

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Enter Your Email" name='email' value={input.email} onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Log In</Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <span>If you are a new user...</span><a href="/register">Create Account?</a>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
