import './App.css';
import { useRef, useState } from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup'

function UserFormWithFormikValidationContext() {
  return (
    <div>
        <div>
            User Form
        </div>

        <Formik initialValues={{
            name: "",
            age: 0
        }}
        onSubmit={(values) => {
            console.log(values)
        }}
        validationSchema={
            Yup.object(
                {
                    name: Yup.string()
                            .required("Name field is required")
                            .max(20, "Name field should be less than 20 characters"),
                    age: Yup.number()
                            .max(60, "Age should be less than 60")
                            .min(10, "age should be greater than 10"),
                }
            )
        }
        >
        {
            (formik)=>(
                <Form onSubmit={formik.handleSubmit}>

                <div>
                    <label htmlFor="">Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" render={(msg)=>(
                        <span style={{color: "red"}}>{msg}</span>
                    )}/>
                </div>
                
                <div>
                    <label htmlFor="age">Age</label>
                    <Field type="number" name="age" id="age" />
                    <ErrorMessage name="age"/>
                 </div>
                
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Form>
    )}
        
        </Formik>
    </div>
  );
}

export default UserFormWithFormikValidationContext;
