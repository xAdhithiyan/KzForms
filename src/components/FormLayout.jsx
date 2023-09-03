
function FormLayout(props){
    return (
        <>
            <div className="inputs">
                <label htmlFor= {props.name} className={props.labelAnimations} >{props.label}</label>
                <input type={props.type} id={props.name} name={props.name} value={props.value} className={props.inputColor} onChange={props.changeValues} onClick={props.changeLabel}/>
                <div className="errors">{props.errors}</div>
            </div>
        </>
    )
}

export default FormLayout;