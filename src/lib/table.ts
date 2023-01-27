import { ServerTableState } from "@/components/hooks/useServerTable";
type BuildPaginationTableParam = {
  /** API Base URL, with / on the front */
  baseUrl: string;
  tableState: ServerTableState;
  /** Parameter addition
   * @example ['include=user,officer']
   */
  additionalParam?: string[];
};
type BuildPaginationTableURL = (props: BuildPaginationTableParam) => string;

export const buildPaginatedTableURL: BuildPaginationTableURL = ({
  baseUrl,
  tableState,
  additionalParam,
}) => {
  const pagePaginateOption = `pageSize=${
    tableState.pagination.pageSize
  }&pageIndex=${tableState.pagination.pageIndex + 1}`;

  const pageSortOption =
    tableState.sorting.length > 0
      ? `&sort=${tableState.sorting[0].id}&type=${
          tableState.sorting[0].desc ? "desc" : "asc"
        }`
      : "";

  const filterOption = tableState.globalFilter.length
    ? `&globalFilter=${tableState.globalFilter}`
    : "";

  const additional =
    additionalParam && additionalParam.length > 0
      ? `&${additionalParam.join("&")}`
      : "";

  return `${baseUrl}?${pagePaginateOption}${pageSortOption}${filterOption}${additional}`;
};
