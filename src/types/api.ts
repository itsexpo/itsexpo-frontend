export type ApiReturn<T> = {
  status: boolean;
  message: string;
  data: T;
};

export type ApiError = {
  message: string;
  code: number;
  success: boolean;
};

export type UninterceptedApiError = {
  message: string | Record<string, string[]>;
};

type PaginateData<Data> = {
  data_per_page: Data;
  meta: {
    page: number;
    max_page: number;
  };
};
export interface PaginatedApiResponse<DataType> {
  code: number;
  status: string;
  data: PaginateData<DataType>;
}
