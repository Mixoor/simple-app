import React from "react";
import { Input, TextArea, Form, Icon } from "semantic-ui-react";

const RoleFormulaire = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Field
        value={props.role}
        onChange={props.handleChange}
        required
        width={4}
        label="Role name"
        placeholder="Role name"
        control={Input}
        className="input-bg"
        naem="role"
        // error={{
        //   content: "Please enter a valid role name",
        //   pointing: "above"
        // }}
        id="form-input-role"
      >
        {/* <label className="label">Role name</label>
        <Input name="role" /> */}
      </Form.Field>

      <Form.Field
        error={props.error.description}
        value={props.description}
        onChange={props.handleChange}
        width={8}
        // error={{
        //   content: "Please enter a valid description ",
        //   pointing: "above"
        // }}
        className="input-bg-textarea"
        control={TextArea}
        placeholder="Write some description"
        rows={8}
        label="Description"
      ></Form.Field>
      <Form.Field width={8} inline>
        <Form.Button
          content="Submit"
          className="left"
          primary
          loading={false}
          icon
          labelPosition="left"
        >
          <Icon name="save" color="white" />
          Enregister
        </Form.Button>
      </Form.Field>
    </Form>
  );
};

export default RoleFormulaire;
