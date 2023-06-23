import { Field, Form, Formik } from "formik";
import CustomInput from "../schemas/CustomInputs";
import { advancedSchema } from "../schemas/indexAdvance";
import CustomSelect from "../schemas/CustomSelect";
import CustomCheckBox from "../schemas/CustomCheckBox";


const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log(values)
};

const AdvancedForm =()=>{
   

    return(
        <Formik
            initialValues={{name:"", jobType:"", acceptedTos:false}}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
        >
        {({isSubmitting })=>(
            <Form>
                <CustomInput
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                />
                <CustomSelect
                    label="Job Type"
                    name="jobType"
                    placeholder="Please select a job "
                >
                    <option value="">Please select a job</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                    <option value="other">Other</option>
                </CustomSelect>
                <CustomCheckBox type="checkbox" name=" acceptedTos" />                       
                <button disabled={isSubmitting } type="submit">Submit</button>
            </Form>
        )}

        </Formik>
    );
};

export default AdvancedForm;