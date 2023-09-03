import * as yup from "yup";


//similar to pattern in vanilla js
//the base level validation
const schema = yup.object({
    firstName: yup.string().required("Enter your Name"),
    regno: yup.string().test('len', 'Registration number must have 15 characters', val => val.length === 15).required("Enter your register number"),
    email: yup.string().email().matches(/@srmist\.edu\.in$/, "Enter a valid Srm email").required("Enter your Email"),
    github: yup.string().url("Enter a valid Github profile").required("Enter your Github profile"),
    linkden: yup.string().url("Enter a valid Linkden profile").required("Enter your Linkden profile"),
})


export default schema 