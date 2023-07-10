import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'cwp-blog-1-popup',
  templateUrl: './blog-1-popup.component.html',
  styleUrls: ['./blog-1-popup.component.scss'],
})
export class Blog1PopupComponent implements OnInit {
  public Editor = ClassicEditor;

  public text = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Blog1PopupComponent>,
  ) {
    this.text = this.data.text;
  }
  ngOnInit(): void {
    ClassicEditor.defaultConfig = {
      toolbar: {
        items: [
          'heading',
          '|',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'indent',
          'outdent',
          '|',
          'alignment', // Add alignment plugin
          '|',
          'blockQuote',
          'insertTable',
          'undo',
          'redo',
        ],
      },
      language: 'en',
      image: {
        toolbar: [
          'imageTextAlternative',
          'imageStyle:full',
          'imageStyle:side',
        ],
      },
      table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
      },
    };
  }

  onEditorReady(event: any) {
    console.log(event.editor);

  }

  submit() {
    this.data.text = this.text;
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
