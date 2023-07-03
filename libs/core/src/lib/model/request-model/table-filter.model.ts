import { SortDirection } from '@angular/material/sort';

export interface TableFilterModel {
  searchKey?: string;

  isSolved?: boolean;
  startDate?: string;

  order?: string;

  sortBy?: string;

  isVerified?: string;

  endDate?: string;

  createdAt?: string;

  page: number;

}
export interface TableSortModel {
  sortType: SortDirection;
  sortBy: string;
}

export const initialFilter: TableFilterModel = {
  page: 1,
  createdAt: 'DESC',
};

export const initialSort: TableSortModel = {
  sortType: 'desc',
  sortBy: 'createdAt',
};
