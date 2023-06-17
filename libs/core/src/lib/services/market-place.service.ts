import { Injectable } from '@angular/core';
import { ApiService } from '.';

@Injectable()
export class MarketPlaceService {
  constructor(
    private apiService: ApiService
  ) {}

  getMarketPlace() {
    return this.apiService.get<any>('marketplaces', true);
  }

  getMarketPlaceDetail(id: string) {
    return this.apiService.get<any>(`marketplaces/${id}`, true);
  }

}
