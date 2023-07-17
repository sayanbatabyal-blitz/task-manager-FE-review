import { Checkbox, CheckboxGroup } from "rsuite"
import { ValueType } from "rsuite/esm/Checkbox"
import { statusEnum } from "../../typings/common"
import { CheckProps } from "./checkbox"

const StatusCheck = ({ data, setData }: CheckProps) => {
  const types = [statusEnum.Started, statusEnum.Completed, statusEnum.Created]
  const handleChange = (data: ValueType[]) => {
    setData(data);
  }
  return (
    <div>
      <CheckboxGroup inline name="checkboxList" value={data} onChange={handleChange}>
        {types.map(item => (
          <Checkbox key={item} value={item}>{item}</Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  )
}

export default StatusCheck