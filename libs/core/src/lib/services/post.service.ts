import { Injectable } from '@angular/core';
import { ApiService } from '.';

@Injectable()
export class PostService {
  constructor(
    private apiService: ApiService
  ) {}

  getPosts(page: number) {
    return this.apiService.get<any>(`posts?page=${page}`, true);
  }

  getTrendingPosts(page: number) {
    return this.apiService.get<any>(`posts?page=${page}`, true);
  }

  getPostDetail(id: string) {
    return this.apiService.get<any>(`posts/${id}`, true);
  }

  createPost(data: any) {
    return this.apiService.post<any>(`posts`, data, true);
  }

}
