// @ts-ignore
import FormLayout from "./components/FormLayout.jsx" 
import "./App.css"
import { useState } from "react"

function App(){
    /* the displaying content */
    const [values, setValues] = useState({
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
            type:"email",
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


    return(
        <div className="mainForm">
            <form action="#">
                {inputs.map( (i) => (
                    <FormLayout key={i.id} {...values} {...i}/> 
                ))}
                <button>Submit</button>
            </form>

        </div>

    )
}

export default App