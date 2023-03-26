
import './App.css';
import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

function UserFormWithFormikValidation() {
    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0
        },

        onSubmit: (values) => {
            console.log(values)
        },

        validationSchema: Yup.object(
            {
                name: Yup.string()
                        .required("Name field is required")
                        .max(20, "Name field should be less than 20 characters"),
                age: Yup.number()
                        .max(60, "Age should be less than 60")
                        .min(10, "age should be greater than 10"),
            }
        )
       

    })

  return (
    <div>
        <div>
            User Form
        </div>
        <form onSubmit={formik.handleSubmit}>

        <div>
        
            <label htmlFor="">Name</label>
            <input id="name"  type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {
                formik.errors.name?
                <div style={{color: "red"}}>{formik.errors.name}</div>:
                null

            }
        
        </div>
        
        <div>
            
            <label htmlFor="">Age</label>
            <input id="age"  type="number" {...formik.getFieldProps("age")}
            />
            {
                formik.errors.age?
                <div style={{color: "red"}}>{formik.errors.age}</div>:
                null

            }
        
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  );
}

export default UserFormWithFormikValidation;
