import type {InputProps} from "../../types/input";

const Input:React.FC<InputProps>=({
    labelText,
    inputId,
    type,
    placeholderText,
    onChange,
    value,
    name,
})=>{
    return(
        <>
        <label htmlFor={inputId}>{labelText}</label>
        <input 
        id={inputId}
        type={type}
        placeholder={placeholderText}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        name={name}
         />
        </>
    )
}
export default Input;