export type Pagination = {
  page?: number;
  size?: number;
  sort?: string;
};

export type PageMeta = {
  currentPage: number;
  empty: number;
  numberOfElements: number;
  pageFirst: boolean;
  pageLast: boolean;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type Response<T> = {
  data: T;
  message: string;
  code: number;
};
