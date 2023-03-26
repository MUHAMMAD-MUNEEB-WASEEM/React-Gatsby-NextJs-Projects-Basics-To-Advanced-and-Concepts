import { ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup'
import './styles.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function UserFormWithFormikValidationContext() {
    
  return (
    <div className="container">

        <Formik initialValues={{
            firstName: "",
            lastName:"",
            email:"",
            password:""
        }}
        onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2))
        }
    }
        validationSchema={
            Yup.object(
                {
                    firstName: Yup.string()
                            .required("First Name is required")
                            .max(20, "Name field should be less than 20 characters"),
                    lastName: Yup.string()
                            .required("Last Name is required")
                            .max(20, "Name field should be less than 20 characters"),
                    email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                    password: Yup.string()
                            .min(5,'Password is too short - should be 8 chars long.')
                            .required('Required'),

                }
            )
        }
        >
        {
            (formik)=>(

                <Form onSubmit={formik.handleSubmit} className="form">

                <div className="group">
                    <div className="col-1"><label htmlFor="">First Name</label></div>
                    <div className="col-2"><Field type="text" name="firstName" id="firstName" placeholder="Fast Name"/></div>
                    <ErrorMessage name="firstName" render={(msg)=>(
                        <span style={{color: "red"}}>{msg}</span>
                    )}/>
                </div>

                <div className="group">
                <div className="col-1"><label htmlFor="">Last Name</label></div>
                <div className="col-2"><Field type="text" name="lastName" id="lastName" placeholder="Last Name"/></div>
                    <ErrorMessage name="lastName" render={(msg)=>(
                        <span style={{color: "red"}}>{msg}</span>
                    )}/>
                </div>

                <div className="group">
                    <div className="col-1"><label htmlFor="">Email</label></div>
                    <div className="col-2"><Field type="email" name="email" id="email" placeholder="abc@gmail.com"/></div>
                    <ErrorMessage name="email" render={(msg)=>(
                        <span style={{color: "red"}}>{msg}</span>
                    )}/>
                </div>

                <div className="group">
                    <div className="col-1"><label htmlFor="">password</label></div>
                    <div className="col-2"><Field type="password" name="password" id="password" placeholder="password"/></div>
                    <ErrorMessage name="password" render={(msg)=>(
                        <span style={{color: "red"}}>{msg}</span>
                    )}/>
                </div>
                
                <div >
                    <button type="submit" className="submit">Submit</button>
                </div>
            </Form>
    )}
        
        </Formik>
    </div>
  );
}

export default UserFormWithFormikValidationContext;
