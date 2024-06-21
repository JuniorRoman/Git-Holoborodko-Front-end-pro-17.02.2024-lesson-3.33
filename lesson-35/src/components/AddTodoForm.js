import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Formik, Form, Field } from "formik";

const AddTodoForm = ({ addTodo }) => {
  return (
    <div className="text-center">
      <h2>Add Todo</h2>
      <Formik
        initialValues={{ text: "" }}
        onSubmit={(values, { resetForm }) => {
          addTodo(values.text);
          resetForm();
        }}
      >
        <Form>
          <div className="input-group mb-2">
            <Field className="form-control" name="text" type="text" />
          </div>
          <button className="btn btn-info px-5" type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
