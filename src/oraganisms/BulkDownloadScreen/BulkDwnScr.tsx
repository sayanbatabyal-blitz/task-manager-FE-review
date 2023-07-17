import { DateRange } from "rsuite/esm/DateRangePicker"
import StatusCheck from "../../molecules/CheckBoxGroup/StatusCheck"
import DateRangeField from "../../atoms/DateRange/DateRangeField"
import { toast } from "react-toastify";
import "./bulkDwnScr.scss"
import {useState} from  'react'
import ButtonSubmit from "../../atoms/Button/ButtonSubmit"
import axios from "axios"
import { URL } from "../../helper/utils";
import { useNavigate } from "react-router-dom";
import download from 'downloadjs'
const BulkDwnScr = () => {
    const [status,setStatus]=useState([])
    const [startDate,setstartDate]=useState<DateRange>()
    const [completionDate,setCompletionDate]=useState<DateRange>()
    const nav=useNavigate()
    const handleDateToISOString = (date:DateRange|undefined) => {
        if(date==undefined) return {}
        const from=date[0].toISOString()
        const to=date[1].toISOString()
        return {from,to}
    }

    const handleChange= async()=>{
        const filters={
            status:status,
            startDate:handleDateToISOString(startDate),
            completionDate:handleDateToISOString(completionDate)
        }
        try{
            const res=await axios.post(`${URL}/task/bulkDownload`,filters)
            toast.success('File Downloading')
            download(new Blob([res.data]), "sample.csv", "csv");
            nav('/')
        } 

        catch(err:any){
            toast.error(err)
        }
    }
    

  return (
    <div className="filter-container">
    <div className="filter-form">
    <h3 className="filter-header">Apply Your Filters</h3>
        <div className="form-itm">
        <label>Start Date</label>    
        <DateRangeField date={startDate} setDate={setstartDate} />
        </div>
        <div className="form-itm">
         <label>Completion Date</label>   
        <DateRangeField date={completionDate} setDate={setCompletionDate} />
        </div>
        <div className="form-itm">
         <label>Status</label>   
        <StatusCheck data={status} setData={setStatus}/>
        </div>
        <ButtonSubmit title='Download' handleClick={handleChange} scssClass="buttonSubmit"/>
    </div>
    </div>
  )
}

export default BulkDwnScr