// @ts-nocheck
// @ts-ignore
import FormLayout from "../components/FormLayout.jsx" 
import "../styling/normalize.css"
import "../styling/App.css"
import { useRef, useState } from "react"
import schema from "../userValidation.js"
import {useNavigate} from 'react-router-dom' //used for navigating to new page
import bgImg from "./images/bg.jpg"
import logoImg from "./images/logo.jpg"

function HomePage(){
    /* the displaying content */
    const [values, setValues] = useState({
        firstName: "",
        regno: "",
        email: "",
        github: "",
        linkden: "",
    })

    /* label animations */
    const [labelAnimation, setlabelAnimation] = useState({
        firstName: "",
        regno: "",
        email: "",
        github: "",
        linkden: "",
    })
    /* form validation errors */
    const [errors, setErrors] = useState({
        firstName: "",
        regno: "",
        email: "",
        github: "",
        linkden: "",
    })
    /* form validation input colors */
    const inputColor = useRef({
        firstName: "",
        regno: "",
        email: "",
        github: "",
        linkden: "",
    })

    /* all the input attributes */
    const inputs = [
        {
            id: 1,
            name:"firstName",
            type:"text",
            label:"First Name",
        },
        {
            id: 2,
            name:"regno",
            type:"text",
            label:"Registration Number",
        },
        {
            id: 3,
            name:"email",
            type:"text",
            label:"Email",
        },
        {
            id: 4,
            name:"github",
            type:"text",
            label:"Github",
        },
        {
            id: 5,
            name:"linkden",
            type:"text",
            label:"Linkden",
        }

    ]
    let navigate = useNavigate();

    //setValues must be an object
    //we are rewritting the changed property
    function changeValues(e: any){
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    } 

    /* to update the input color */
    async function submittingForm(e: any){
        e.preventDefault();
        try {
            await schema.validate(values, { abortEarly: false });

            setErrors({
                firstName: "",
                regno: "",
                email: "",
                github: "",
                linkden: "",
            });

            for(let i in values){
                inputColor.current = {
                    ...inputColor.current , [i] : "valid",
                }
            }
            navigate("/info", {state:{...values}}) //sending the values 
    
        } catch (validationErrors: any) {
            // If validation fails, set the errors state with the error messages
            const errorsObject = {};
            validationErrors.inner.forEach(error => {
                errorsObject[error.path] = error.message;
            });
            setErrors(errorsObject);

            for(let i in values){
                inputColor.current = {
                    ...inputColor.current , [i] : "valid",
                }
            }
            for(let i in errorsObject){
                inputColor.current = {
                    ...inputColor.current , [i] : "invalid",
                }
            } 
        }  
    }   

    /* label animaton */
    function changeLabel(e: any){
        setlabelAnimation({
            ...labelAnimation,
            [e.target.name]: "labelAnimation",
        })
    } 

    return(
        <div className="mainForm" onSubmit={submittingForm}>
            <div className="image-side">
                <img src={logoImg} alt="" className="logo-img"/>
                <h1>We are recurting !</h1>
                <h2>Hey there! Join our club to dive into a world of endless opportunities and meet some incredible tech enthusiasts. It's not just a club; it's a friendly tech adventure waiting for you! </h2>
                <img src={bgImg} alt="an astronaut" className="bg-img"/>
                <div className="svg-img">
                    <a href="https://www.srmkzilla.net/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/srmkzilla/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/srmkzilla/   " target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                    </a>
                    <a href="https://twitter.com/SRMKZILLA_Club" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>
                    </a>
                    <a href="https://github.com/srm-kzilla" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
                    </a>
                </div>

            </div>
           
            <form action="#" className="form">
                {inputs.map( (i) => (
                    <FormLayout key={i.id} {...i} value={values[i.name]} changeValues={changeValues}  labelAnimations ={labelAnimation[i.name]} changeLabel={changeLabel} errors = {errors[i.name]} inputColor = {inputColor.current[i.name]}/>  
                ))}
                <div className="btn"><button className="mainBtn">Submit</button></div>
            </form>
        </div>

    )
}

export default HomePage