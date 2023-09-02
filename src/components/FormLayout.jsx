import { useState } from "react";


function FormLayout(props){
    return (
        <>
            <div className="inputs">
                <label htmlFor= {props.name} className={props.labelAnimations} >{props.label}</label>
                <input type={props.type} id={props.name} name={props.name} value={props.value} onChange={props.changeValues} onClick={props.changeLabel} required/>
            </div>
        </>
    )
}

export default FormLayout;