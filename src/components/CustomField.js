import React from "react";
import { Form } from "rsuite";

// Base field
export const CustomField = React.forwardRef(
  ({ name, message, label, accepter, error, ...rest }, ref) => {
    const hasError = () => {
      return error && error.hasError;
    };
    return (
      <Form.Group
        ref={ref}
        controlId="name"
        className={hasError() ? "has-error" : ""}
      >
        <Form.ControlLabel>{label} </Form.ControlLabel>
        <Form.Control
          name={name}
          accepter={accepter}
          errorMessage={hasError() ? error.errorMessage : ""}
          {...rest}
        />
        <Form.HelpText>{message}</Form.HelpText>
      </Form.Group>
    );
  }
);
