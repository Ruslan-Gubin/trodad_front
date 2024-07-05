import { useState } from "react";

type Props = {
  changePage: (page: number) => void;
  changeLimit?: ({ limit }: {
    limit: number;
}) => void
}

const useFilterTable = ({ changeLimit, changePage }: Props) => {
  const [search, setSearch] = useState<Record<string, string> | null>(null);


  const onCancelSearch = () => {
    setSearch(null);
    resetPagination();
  };

  const resetPagination = () => {
    changePage(1);
    if (changeLimit) {
      changeLimit({ limit: 10 });
    }
  };

  const onSubminSearch = (values: Record<string, string>) => {
    setSearch(values);
    resetPagination();
  };


  return { onCancelSearch, onSubminSearch, search };
};

export { useFilterTable };