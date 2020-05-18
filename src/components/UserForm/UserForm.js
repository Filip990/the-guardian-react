import React from "react";
import { Form, Button } from "react-bootstrap";
import { StyledForm } from "./UserForm.styled";

const UserForm = (props) => {
  return (
    <StyledForm onSubmit={props.onSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </StyledForm>
  );
};

export default UserForm;
