import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cwp-accordion-1-ui',
  templateUrl: './accordion-1-ui.component.html',
  styleUrls: ['./accordion-1-ui.component.css'],
})
export class Accordion1UiComponent implements OnInit {
  @Input() data: any;
  ngOnInit(): void {
    // this.data = [
    //   {
    //     title: 'What is Lorem Ipsum?',
    //   }
    // ];
  }
}
