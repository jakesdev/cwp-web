import { Component, Input } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'cwp-blog-1-ui',
  templateUrl: './blog-1-ui.component.html',
  styleUrls: ['./blog-1-ui.component.scss'],
})
export class Blog1UiComponent {

  @Input() data: any;
  public Editor = ClassicEditor;
}
