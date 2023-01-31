import { ServerTableState } from '@/components/hooks/useServerTable';
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
  const pagePaginateOption = `per_page=${tableState.pagination.pageSize}&page=${
    tableState.pagination.pageIndex + 1
  }`;

  const pageSortOption =
    tableState.sorting.length > 0
      ? `&sort=${tableState.sorting[0].id}&type=${
          tableState.sorting[0].desc ? 'desc' : 'asc'
        }`
      : '';

  const filterOption = tableState.globalFilter.length
    ? `&search=${tableState.globalFilter}`
    : '';

  const additional =
    additionalParam && additionalParam.length > 0
      ? `&${additionalParam.join('&')}`
      : '';

  return `${baseUrl}?${pagePaginateOption}${pageSortOption}${filterOption}${additional}`;
};
