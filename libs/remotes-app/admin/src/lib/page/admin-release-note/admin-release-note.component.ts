import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'cwp-admin-release-note',
  templateUrl: './admin-release-note.component.html',
  styleUrls: ['./admin-release-note.component.css'],
})
export class AdminReleaseNotePageComponent {
  public Editor = ClassicEditor;
  private editorInstance: any;


  onEditorReady(event: any) {
    this.editorInstance = event.editor;

  }

  public submit() {
    if (this.editorInstance) {

      const content = this.editorInstance.getData();
    }
  }
}
