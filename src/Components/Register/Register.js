import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [role, setRole] = useState("patient");
  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    dateofbirth: "",
    contact: "",
    address: "",
    role: role,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:4000/manage/${role}`,
        register
      );
      console.log(res)
       if(res.status===200){
        navigate("/login");
       }

    } catch (error) {
      console.log("registration failed", error);
      
      alert(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          FullName :
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type="text"
            placeholder="Enter Your FullName"
            name="fullname"
            value={register.fullname}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Email :
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type=""
            placeholder="Password"
            name="email"
            value={register.email}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password :
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender :
          </Form.Label>
          <Col sm={4}>
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              value={register.gender}
              onChange={handleChange}
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              value={register.gender}
              onChange={handleChange}
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          DateOfBirth :
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type="date"
            placeholder="Enter your DOB"
            name="dateofbirth"
            value={register.dateofbirth}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Contact :
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type="tele"
            placeholder="Enter Your Contact Number"
            name="contact"
            value={register.contact}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Address :
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type="textarea"
            placeholder="Enter Your Address..."
            name="address"
            value={register.address}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label
            as="legend"
            column
            sm={2}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            Role :
          </Form.Label>
          <Col sm={4}>
            <Form.Check
              type="radio"
              label="Admin"
              value="admin"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Patient"
              value="patient"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
