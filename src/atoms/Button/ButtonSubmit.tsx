import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./button.scss";
import { ButtonProp } from "./types";
const ButtonSubmit = ({ title, onClick, scssClass }: ButtonProp) => {
  return (
    <Button className={`${scssClass}`} onClick={onClick}>
      {title}
    </Button>
  );
};

export default ButtonSubmit;
