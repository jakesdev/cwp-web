import { Component, OnInit } from '@angular/core';
import { AdminService } from '@cwp/core/services';

@Component({
  selector: 'cwp-release-note',
  templateUrl: './release-note.component.html',
  styleUrls: ['./release-note.component.scss'],
})
export class ReleaseNotePageComponent implements OnInit {

  releaseNotes: any[] = [];
  constructor(
    private readonly adminService: AdminService,
  ) {}
  ngOnInit(): void {
    this.getReleaseNotes();
  }

  getReleaseNotes() {
    this.adminService.getReleaseNotes().subscribe((res) => {
      this.releaseNotes = res.data;
    });
  }
}
