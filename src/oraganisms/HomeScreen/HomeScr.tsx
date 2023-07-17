import { Link } from 'react-router-dom'
import "./homeScr.scss"
const HomeScr = () => {  
  return (
    <div className='home'>
        <span>Hey I am Your Task Manager</span> 
        <Link className='link' to="/tasks">Move to Your Tasks</Link> 
    </div>
  )
}

export default HomeScr