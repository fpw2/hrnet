import clsx from "clsx"

export default function Input({id, className, placeholder, type="text", required, ...rest}) {

    const classNames = clsx("input", className) // "input": true => allways this class
    
    return (<>
        <label htmlFor={id} className="label">{placeholder}
        {required && <span className="input-required">*</span>}
        </label>
        <input 
            id={id}
            className={classNames}
            placeholder={placeholder}
            type={type} 
            required={required} 
            {...rest}
        />
    </>)
}