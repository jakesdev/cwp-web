import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService } from '@cwp/core/services';

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

  @Output() commentAdded = new EventEmitter<string>();

  content = '';
  currentUser!: UserProfileModel;

  constructor(private authService: AuthService) {
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
      userId: this.currentUser.id,
      text: this.content,
      author: this.currentUser,
      createdAt: new Date(),
    });

    console.log(this.content);
    // TODO: call api comment

    this.commentAdded.emit(this.content);
    this.content = '';
  }
}
