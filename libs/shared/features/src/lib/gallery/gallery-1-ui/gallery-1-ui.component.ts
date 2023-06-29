import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cwp-gallery-1-ui',
  templateUrl: './gallery-1-ui.component.html',
  styleUrls: ['./gallery-1-ui.component.scss'],
})
export class Gallery1UiComponent implements OnInit{

  @Input() data: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
