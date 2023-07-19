import { InputPicker } from "rsuite";
import "./pagerSize.scss";
import { SizeProp, pageSizes } from "../../typings/common";

const PagerSize = ({ size, changePageSize }: SizeProp): JSX.Element => {
  const data = pageSizes.map((item) => ({
    label: `${item} / Page`,
    value: item,
  }));
  return (
    <InputPicker
      className="picker"
      size="sm"
      onChange={changePageSize}
      value={size}
      data={data}
    />
  );
};

export default PagerSize;
