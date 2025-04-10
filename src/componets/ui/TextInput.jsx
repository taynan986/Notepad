function TextInput({value, hint, change, classes}){
    return(
        <input className= {classes} placeholder= {hint} defaultValue={value} onChange={(e) => change(e.target.value)}></input>
    )
}

export default TextInput;