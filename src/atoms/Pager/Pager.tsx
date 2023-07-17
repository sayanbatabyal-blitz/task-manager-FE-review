import { Pagination } from "rsuite"
import { PagerProps } from "../../typings/common"

const Pager = ({total,page_size,activePage,setActivePage}:PagerProps) => {  
  return (
    <Pagination total={total} limit={page_size} activePage={activePage} onChangePage={(newPage:number) => setActivePage(newPage) } />
  )
}

export default Pager