import { useState } from "react";


const usePagination = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState<number | null>(null);

  const changeCount = (count: number) =>  count && setCount(() => count);

  const changePage = (page: number) =>  setPage(Number(page));
  
  const changeLimit = ({ limit }: { limit: number }) => (setLimit(Number(limit)),setPage(1));

  return { changePage, changeLimit, changeCount, page, limit, count };
}

export { usePagination }