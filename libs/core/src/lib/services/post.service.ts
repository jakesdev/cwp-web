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

  getTrendingPosts() {
    return this.apiService.get<any>(`posts/spotlight`, true);
  }

  getUserPosts(id: string) {
    return this.apiService.get<any>(`posts/user/${id}`, true);
  }

  getPostDetail(id: string) {
    return this.apiService.get<any>(`posts/${id}`, true);
  }

  createPost(data: any) {
    return this.apiService.post<any>(`posts`, data, true);
  }

  deletePost(id: string) {
    return this.apiService.delete<any>(`posts/${id}`, true);
  }

  likePost(id: string) {
    return this.apiService.post<any>(`posts/${id}/like`, {}, true);
  }

  comment(id: string, data: any) {
    return this.apiService.post<any>(`posts/${id}/comment`, {
      content: data
    }, true);
  }

  getRandomUsers() {
    return this.apiService.get<any>(`users/random`, true);
  }

}
