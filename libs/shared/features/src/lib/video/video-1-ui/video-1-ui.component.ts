import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cwp-video-1-ui',
  templateUrl: './video-1-ui.component.html',
  styleUrls: ['./video-1-ui.component.scss'],
})
export class Video1UiComponent implements OnInit {

  @Input() data: any;

  @Input() disabledTagA = false;

  videoId = '';

  ngOnInit() {
    this.videoId = this.data.src.split('v=')[1];
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
