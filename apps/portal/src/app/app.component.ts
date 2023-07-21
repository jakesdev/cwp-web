import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'cwp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private meta: Meta,
    private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Web site created using create-angular-app' },
      { name: 'author', content: 'Creative Web Platform' },
      { name: 'keywords', content: 'Angular, Angular 11, Angular Universal, Angular CLI, Web Builder, Creative Web Platform' },
    ]);
    this.setTitle('Creative Web Builder Platform');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
