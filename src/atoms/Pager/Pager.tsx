import { Pagination } from "rsuite";
import { PagerProps } from "../../typings/common";

const Pager = ({
  total,
  page_size,
  activePage,
  setActivePage,
}: PagerProps): JSX.Element => {
  return (
    <Pagination
      total={total}
      limit={page_size}
      activePage={activePage}
      onChangePage={setActivePage}
    />
  );
};

export default Pager;
