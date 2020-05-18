import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { StyledForm } from "./UserForm.styled";

const UserForm = (props) => {
  const isLoading = props.isLoading;

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
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "Submit"
        )}
      </Button>
    </StyledForm>
  );
};

export default UserForm;
