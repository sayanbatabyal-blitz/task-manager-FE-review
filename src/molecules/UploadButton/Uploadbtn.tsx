
import {  Uploader } from 'rsuite'
import { toast } from "react-toastify";
import { URL } from '../../helper/utils'
import  "./uploadbtn.scss"
import axios from 'axios'
import { FileType } from 'rsuite/esm/Uploader'
import {useNavigate} from 'react-router-dom';

const Uploadbtn = () => {
  const nav=useNavigate()
  const handleChange = async (file:FileType[])=>{
    try{
        const data=new FormData()
        file[0].blobFile && data.append('csv', file[0].blobFile);
        await axios.post(`${URL}/task/bulkUpload`,data)
        toast.success('Bulk Upload Completed')
        nav('/tasks')
        setInterval(()=>{
          window.location.reload()
        },2000)
      }
      catch(err:any) {
        toast.error(err.response.data.error)
      }
      
    }
return (
   <Uploader accept='.csv' maxPreviewFileSize={1} disabledFileItem={true} onChange={handleChange} fileListVisible={false} action=''>
     <button id='btn'>Bulk Upload</button>
    </Uploader>
  )
}

export default Uploadbtn