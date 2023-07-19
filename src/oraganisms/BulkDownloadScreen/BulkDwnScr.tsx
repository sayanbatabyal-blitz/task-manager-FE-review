import { DateRange } from "rsuite/esm/DateRangePicker";
import StatusCheck from "../../molecules/CheckBoxGroup/StatusCheck";
import DateRangeField from "../../atoms/DateRange/DateRangeField";
import { toast } from "react-toastify";
import "./bulkDwnScr.scss";
import React from 'react'
import { useState } from "react";
import ButtonSubmit from "../../atoms/Button/ButtonSubmit";
import axios, { AxiosDefaults, AxiosError, AxiosResponse } from "axios";
import { URL } from "../../helper/utils";
import { useNavigate } from "react-router-dom";
import download from "downloadjs";
import { ValueType } from "rsuite/esm/Checkbox";
import { getbulkDownload } from "../../services/task.service";
const BulkDwnScr = () => {
  const [status, setStatus] = useState<ValueType[]>([]);
  const [startDate, setstartDate] = useState<DateRange | null>(null);
  const [completionDate, setCompletionDate] = useState<DateRange | null>(null);
  const nav = useNavigate();
  const handleDateToISOString = (date: DateRange | null) => {
    if (date == undefined) return {};
    const from = date[0].toISOString();
    const to = date[1].toISOString();
    return { from, to };
  };

  const handleChange = React.useCallback(async ():Promise<void> => {
    const filters = {
      status: status,
      startDate: handleDateToISOString(startDate),
      completionDate: handleDateToISOString(completionDate),
    };
    try {
      const {data} = await getbulkDownload(`${URL}/task/bulkDownload`, filters);
      toast.success("File Downloading");
      download(new Blob([data]), "sample.csv", "csv");
      nav("/");
    } catch (err) {
      err as AxiosError;
      toast.error("Bulk Download Failed");
    }
  },[completionDate, nav, startDate, status]);

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
          <StatusCheck data={status} setData={setStatus} />
        </div>
        <ButtonSubmit
          title="Download"
          onClick={handleChange}
          scssClass="buttonSubmit"
        />
      </div>
    </div>
  );
};

export default BulkDwnScr;
