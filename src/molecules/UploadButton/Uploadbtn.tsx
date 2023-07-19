import { Uploader } from "rsuite";
import { toast } from "react-toastify";
import { URL } from "../../helper/utils";
import "./uploadbtn.scss";
import React from "react";
import { AxiosError } from "axios";
import { FileType } from "rsuite/esm/Uploader";
import { useNavigate } from "react-router-dom";
import { forBulkUpload } from "../../services/task.service";

const Uploadbtn = () => {
  const nav = useNavigate();
  const handleChange = React.useCallback(
    async (file: FileType[]) => {
      try {
        const data = new FormData();
        file[0].blobFile && data.append("csv", file[0].blobFile);
        await forBulkUpload(`${URL}/task/bulkUpload`, data);
        toast.success("Bulk Upload Completed");
        nav("/tasks");
        setInterval(() => {
          window.location.reload();
        }, 2000);
      } catch (err) {
        err as AxiosError;
        toast.error(err.response.data.error);
      }
    },
    [nav]
  );
  return (
    <Uploader
      accept=".csv"
      maxPreviewFileSize={1}
      disabledFileItem={true}
      onChange={handleChange}
      fileListVisible={false}
      action=""
    >
      <button id="btn">Bulk Upload</button>
    </Uploader>
  );
};

export default Uploadbtn;
