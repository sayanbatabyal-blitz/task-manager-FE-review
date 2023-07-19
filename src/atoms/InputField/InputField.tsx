import { Input, InputProps } from "rsuite";
const InputField = ({
  placeholder,
  type,
  value,
  onChange,
  disabled,
  ...rest
}: InputProps) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
  );
};

export default InputField;
