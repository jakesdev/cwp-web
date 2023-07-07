import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AdminService, NotificationService } from '@cwp/core/services';

@Component({
  selector: 'cwp-admin-release-note',
  templateUrl: './admin-release-note.component.html',
  styleUrls: ['./admin-release-note.component.scss'],
})
export class AdminReleaseNotePageComponent implements OnInit {
  public Editor = ClassicEditor;

  releaseNotes: any[] = [];

  text = '';
  constructor(
    private readonly adminService: AdminService,

    private readonly notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.getReleaseNotes();
  }

  getReleaseNotes() {
    this.adminService.getReleaseNotes().subscribe((res) => {
      this.releaseNotes = res.data;
    });
  }

  delete(id: any) {
    this.adminService.deleteReleaseNotes(id).subscribe((res) => {
      this.notificationService.success('Delete successfully');
      this.getReleaseNotes();
    });
  }

  public submit() {
    this.adminService.createReleaseNotes({
      text: this.text,
    }).subscribe((res) => {
      this.notificationService.success('Create successfully');
      this.getReleaseNotes();
    }
    );
  }
}
