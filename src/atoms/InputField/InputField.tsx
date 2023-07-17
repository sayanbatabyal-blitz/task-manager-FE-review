import { Input } from "rsuite"
import { InputFieldProps } from "./input"

const InputField = ({placeholder,type,value,onChange,disabled}:InputFieldProps) => {
  return (
    <Input placeholder={placeholder} type={type} value={value} onChange={(val)=>onChange(val)} disabled={disabled} />
  )
}

export default InputField