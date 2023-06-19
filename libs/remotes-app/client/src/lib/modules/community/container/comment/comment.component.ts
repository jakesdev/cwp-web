import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, PostService } from '@cwp/core/services';

@Component({
  selector: 'cwp-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  private _comments: any[] = [];
  @Input() set comments(value: any[]) {
    this._comments = value;
  }
  get comments() {
    return this._comments;
  }

  @Input() postId!: string;

  @Output() commentAdded = new EventEmitter<string>();

  content = '';
  currentUser!: UserProfileModel;

  constructor(
    private authService: AuthService,
    private postService: PostService
  ) {
    this.authService.currentUserSubject.subscribe({
      next: (res) => {
        this.currentUser = res.user;
      },
    });
  }

  onCommentChange(event: any) {
    this.content = event.target.value;
  }

  postComment() {
    if (this.content.trim() === '') {
      return;
    }

    this.comments.push({
      userEmail: this.currentUser.email,
      text: this.content,
      author: this.currentUser,
      createdAt: new Date(),
      userAvatarUrl: this.currentUser.avatarUrl,
    });

    this.postService.comment(this.postId, this.content).subscribe((res: any) => {
      console.log(res);
    });

    this.commentAdded.emit(this.content);
    this.content = '';
  }
}
