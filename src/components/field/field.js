const Field =({label,id,className="", ...props})=>{
    return(
        <div className="col-6">
            <label htmlFor={id} className="form-label">{label}</label>
            <input id={id}
            {...props}
            className={"form-control"+ className}
            />
        </div>
    )
}
export default Field