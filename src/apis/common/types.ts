export type Pagination = {
  page?: number;
  size?: number;
  sort?: string;
};

export type PageMeta = {
  pageable: {
    sort: {
      empty: true;
      sorted: false;
      unsorted: true;
    };
    offset: 0;
    pageNumber: 0;
    pageSize: 10;
    paged: true;
    unpaged: false;
  };
  totalPages: 0;
  totalElements: 0;
  last: true;
  size: 10;
  number: 0;
  sort: {
    empty: true;
    sorted: false;
    unsorted: true;
  };
  numberOfElements: 0;
  first: true;
  empty: true;
};

export type Response<T> = {
  data: T;
  message: string;
  code: number;
};
