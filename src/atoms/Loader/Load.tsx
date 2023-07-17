import { Loader } from "rsuite"

const Load = ({content}:{content:string}) => {
  return (
    <Loader size='lg' content={content}></Loader>
  )
}

export default Load