import { useFormik } from "formik";
import basicSchema from "../schemas";


const onSubmit=(values, action)=>{
    console.log(values);
    console.log(action);
}

const BasicForm =()=>{

    const {values, errors, touched, handleChange, handleBlur, handleSubmit}= useFormik({
        initialValues:{
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
        },

        onSubmit,
        validationSchema: basicSchema,
    });

   console.log(errors)
    return(
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="username">Username</label>
            <input 
                id="username" 
                type="text" 
                placeholder="Enter your username"
                value={values.username} 
                onChange={handleChange} 
                onBlur={handleBlur}
                className={errors.username && touched.username ? "input-error" : ""}
            />
            {errors.username && touched.username && <p className="error">{errors.username}</p>}

            <label htmlFor="email">Email</label>
            <input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                value={values.email} 
                onChange={handleChange} 
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                value={values.password} 
                onChange={handleChange} 
                onBlur={handleBlur}
                className={errors.password && touched.password ? "input-error" : ""}
            />
            {errors.password && touched.password && <p className="error">{errors.password}</p>}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
                id="confirmPassword" 
                type="text" 
                placeholder="Confirm Password"
                value={values.confirmPassword} 
                onChange={handleChange} 
                onBlur={handleBlur}
                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
            />
            {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>} 
            <button type="submit">Submit</button>
        </form>
    );
};

export default BasicForm;