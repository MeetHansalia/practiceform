import { Formik, Form, Field, ErrorMessage } from "formik";



const BasicForm =()=>{

    // const formik = useFormik({
    //     initialValues:{
    //         email:""
    //     },
    // });

    // console.log(formik);
    return(
        <>
        <Formik autoComplete="off">
            <Form>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email"/>
            </Form>
        </Formik>
        </>
    );
};

export default BasicForm;