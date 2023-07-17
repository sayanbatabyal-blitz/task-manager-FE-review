import {Form} from 'rsuite'
import ButtonSubmit from '../../atoms/Button/ButtonSubmit'
import "./taskForm.scss"
import { TaskFormProps, formType } from '../../typings/common'
import {useState,useEffect} from 'react'
import FormGroup from '../../molecules/FormGroup'

const TaskForm = ({type,handleSubmit,taskData}:TaskFormProps) => {
const [name,setName]=useState('')
const [taskId,setTaskId]=useState('')
const [startDate,setStartDate]=useState(new Date().toISOString().substring(0,10))
const [completionDate,setCompletionDate]=useState(new Date().toISOString().substring(0,10))
const [description,setDescription]=useState('')

useEffect(() => {
  setName(taskData[0].name)
  setDescription(taskData[0].description)
  setCompletionDate(taskData[0].completionDate? taskData[0].completionDate.substring(0,10):'')
  setStartDate(taskData[0].startDate.substring(0,10))
  setTaskId(taskData[0].taskId)  
},[taskData])

  return (
    <Form  className='form'>
    <FormGroup disabled={type==formType.modify} label='Task ID' value={taskId} setValue={setTaskId} type='number' placeholder='Task ID' />  
    <FormGroup disabled={type==formType.modify} label='Task Name' value={name} setValue={setName} type='text' placeholder='Task Name' />  
    <FormGroup disabled={false} label='Description' value={description} setValue={setDescription} type='text' placeholder='Description' />  
    <FormGroup disabled={false} label='Start Date' value={startDate} setValue={setStartDate} type='date' placeholder='' />  
    <FormGroup disabled={false} label='Completion Date' value={completionDate} setValue={setCompletionDate} type='date' placeholder='' />  
    <ButtonSubmit title={type} handleClick={()=>handleSubmit({taskId,name,description,startDate,completionDate})} scssClass='buttonSubmit'/>
  </Form>

  )
}

export default TaskForm