import { DateRange } from "rsuite/esm/DateRangePicker"

export interface DateRangeProps{
    date :DateRange | null
    setDate:(value:DateRange | null)=>void
}