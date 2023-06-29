import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cwp-gallery-3-ui',
  templateUrl: './gallery-3-ui.component.html',
  styleUrls: ['./gallery-3-ui.component.scss'],
})
export class Gallery3UiComponent implements OnInit {
  @Input() data: any;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor() {}

  ngOnInit() {

  }
}
