function Button({text, classes, click}){
    const ls = window.localStorage;
    const lastUID = ls.getItem("lastUID");

    return(
        <button className= {classes} onClick={()=>click()}>
            {text}
        </button>
    )
}

export default Button