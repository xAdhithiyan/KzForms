import { useState } from "react";


function FormLayout(props){
    console.log(props.label.value)
    return (
        <>
            <div className="inputs">
                <label htmlFor= {props.name}>{props.label}</label>
                <input type={props.type} id={props.name} name={props.name} required/>
            </div>
        </>
    )
}
export default FormLayout;