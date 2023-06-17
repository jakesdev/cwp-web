import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cwp-gallery-4-ui',
  templateUrl: './gallery-4-ui.component.html',
  styleUrls: ['./gallery-4-ui.component.css'],
})
export class Gallery4UiComponent implements OnInit {

  @Input() data: any;

  title = [];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit(): void {
    this.title = this.data.title;
  }
}
