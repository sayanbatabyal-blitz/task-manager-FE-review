import InputField from "../../atoms/InputField";
import { FormGrpProps } from "./types";
import "./formGroup.scss";
const FormGroup = ({
  label,
  placeholder,
  value,
  setValue,
  type,
  disabled,
}: FormGrpProps) => {
  return (
    <div className="frmGrp">
      <label>{label}</label>
      <InputField
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        disabled={disabled}
        type={type}
      />
    </div>
  );
};

export default FormGroup;
