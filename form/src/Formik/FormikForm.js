import React from "react";
import{Formik,Form, Field} from 'formik';
import * as Yup from "yup";



const ValidationSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Required"),
    email: Yup.string().email('Invalid email').required("Required"),
    password: Yup.string().required("Required").min(8,"Password is too short - should be 8 char").matches(/(?=.*[0-9])/, "Password must contain a number."),
})



const LoginForm=()=>{
    
        <Formik
            initialValues={{email:"", password:""}}
            validationSchema={ValidationSchema}
            onSubmit={(values, {setSubmitting})=>{
                    setTimeout(() => {
                        console.log("Logging in", values);
                        setSubmitting(false);
                    }, 500);
                }
            }>
        
            {props =>{
                const
                {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    // handleChange,
                    // handleBlur,
                    handleSubmit
                } = props;

                return(
                    <Form  onSubmit={handleSubmit}>
                        <div className="input-field-group">
                            <Field type="username" name="username" className="input-box" placeholder="Enter your Email"/>
                        </div>
                    </Form>
                    
                )
            }
            }

        </Formik>
   
        
}


export default LoginForm;