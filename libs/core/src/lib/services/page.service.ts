import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '.';
import { CreatePage } from '../model/request-model/create-page.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PageService {
  constructor(
    private router: Router,
    private apiServices: ApiService,

  ) {}

  getAllPages() {
    return this.apiServices.get<any>(`pages`, true);
  }

  getTemplatesPage() {
    return this.apiServices.get<any>(`pages/templates`, true);
  }

  createPage(data: CreatePage) {
    return this.apiServices.post<any>('pages', data, true);
  }

  updatePage(id: string, data: any) {
    return this.apiServices.update<any>(`pages/${id}`, data, true);
  }

  getPage(id: string) {
    return this.apiServices.get<any>(`pages/${id}`, true);
  }

  deletePage(id: string) {
    return this.apiServices.delete<any>(`pages/${id}`, null, true);
  }

  getPageBySlug(slug: string) {
    return this.apiServices.get<any>(`pages/web-page?url=${slug}`, true);
  }

  checkUrl(url: string) {
    return this.apiServices.get<any>(`pages/check-url?url=${url}`, true);
  }
}
