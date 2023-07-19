export interface FormGrpProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  type: string;
  disabled: boolean;
}
