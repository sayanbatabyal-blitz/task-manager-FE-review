import  { Button } from "rsuite"
import 'rsuite/dist/rsuite.min.css';
import "./button.scss"
import { ButtonProp } from "./button";
const ButtonSubmit = ({title,handleClick,scssClass}:ButtonProp)=>{
  return (
    <Button className={`${scssClass}`} onClick={()=>handleClick()}>{title}</Button>
  )
}

export default ButtonSubmit