export type Pagination = {
  page?: number;
  size?: number;
  sort?: string;
};

export type PageMeta = {
  currentPage: number;
  size: number;
  totalPage: number;
};

export type Response<T> = {
  data: T;
  message: string;
  code: number;
};
