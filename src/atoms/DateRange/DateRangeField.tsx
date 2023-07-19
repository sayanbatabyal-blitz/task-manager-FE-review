import { DateRangePicker } from "rsuite";
import { DateRange } from "rsuite/esm/DateRangePicker";
import { DateRangeProps } from "./types";

const DateRangeField = ({ date, setDate }: DateRangeProps) => {
  const handleDateChange = (value: DateRange | null) => {
    setDate(value);
  };
  return (
    <DateRangePicker
      placeholder="Select Date Range"
      value={date}
      onChange={handleDateChange}
    />
  );
};

export default DateRangeField;
