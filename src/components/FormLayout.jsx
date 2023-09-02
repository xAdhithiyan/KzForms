import { useState } from "react";


function FormLayout(props){
    return (
        <>
            <div className="inputs">
                <label htmlFor= {props.name}>{props.label}</label>
                <input type={props.type} id={props.name} name={props.name} value={props.value} onChange={props.changeValues} required/>
            </div>
        </>
    )
}

export default FormLayout;