import * as yup from "yup";

const passwordRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const basicSchema = yup.object().shape({
    username: yup.string()
        .min(2,'Too Short')
        .max(50,"Too Long!")
        .required("Required"),
    email: yup.string()
        .email("Enter a Valid Email")
        .required("Required"),
    password: yup.string()
        .min(5,"Min 5 char required")
        .matches(passwordRules,{message:"Please Enter a Strong Password"}) 
        .required("Required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Required"),

})

export default basicSchema;