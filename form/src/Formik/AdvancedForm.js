import { useFormik } from "formik";


const AdvancedForm =()=>{
   

    return(
        <form autoComplete="off">
            <label htmlFor="email">Password</label>
            <input id="email" type="email" placeholder="Enter your email"/>
        </form>
    );
};

export default AdvancedForm;