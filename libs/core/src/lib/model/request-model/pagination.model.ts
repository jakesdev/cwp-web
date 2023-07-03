export interface PaginationModel {
  take: number;
  itemCount?: number;
  pageCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  page: number;
}

export const initialPagination: PaginationModel = {
  page: 1,
  take: 10,
};
