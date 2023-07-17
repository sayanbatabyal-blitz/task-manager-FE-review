import { useQuery } from "@tanstack/react-query"
import {useState} from 'react'
import { pageTasks } from "../../services/task.service"
import Load from "../../atoms/Loader"
import { Task, newQuery } from "../../helper/utils"
import TaskContainer from ".././TaskCard"
import "./taskScr.scss"
import Pager from "../../atoms/Pager/Pager"
import PagerSize from "../../atoms/Pager/PagerSize"
import { useNavigate } from "react-router-dom"

const TasksScr = () => {  
 const nav=useNavigate() 

const [page,setPage]=useState({
    page_no:'0',
    page_size:'2',
    total:'0',
    pageQuery:`?page_no=0&page_size=2`
  })
const {data,isLoading} = useQuery({ queryKey: ['pager', page] , queryFn: () => pageTasks(page,setPage)}) 
const handlePageChange= (pageNo:string)=>{
  const total=data ? data.meta.total :'4'
  const page_no=parseInt(pageNo)-1;
  const queryString= newQuery(`${page_no}`,page.page_size)
  setPage(prev=>({...prev,['total']:total,['pageQuery']:queryString,[`page_no`]:pageNo}))
}

const handleModify=(taskId:string)=>{
      nav(`/modify/${taskId}`)
  }

const handlePageSizeChange=(pageSize:string)=>{
  if(pageSize==null) return;
  const total=data?data.meta.total:'4'
  const queryString= newQuery(`0`,pageSize)
  setPage(prev=>({...prev,['total']:total,['page_size']:pageSize,['pageQuery']:queryString,[`page_no`]:'1'}))
}

return (
  <>
  {(isLoading)?<Load content="Data Loading" />:
    <>
    <div className="pagination">
   <Pager total={parseInt(page.total)} page_size={parseInt(page.page_size)} activePage={parseInt(page.page_no)} setActivePage={handlePageChange} />
   <PagerSize size={page.page_size} changePageSize={handlePageSizeChange}/> 
    </div>
  <div className="taskContainer">
   
  {    
  data?.tasks.map((itm:Task)=>{
    return <TaskContainer status={itm.status} key={itm.taskId} name={itm.name} taskId={itm.taskId} description={itm.description} completionDate={itm.completionDate} handleModify={handleModify} startDate={itm.startDate}/>
  })
}  
  </div>
</>
  }
  </>
) 
}

export default TasksScr