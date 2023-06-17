import { Component } from '@angular/core';

@Component({
  selector: 'cwp-selection-component',
  templateUrl: './selection-component.component.html',
  styleUrls: ['./selection-component.component.scss'],
})
export class SelectionComponentComponent {


  draggedProduct: any;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  sidebarVisible4!: boolean;
  images: any[] = [
    // fake data
    `<div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 class="text-base font-semibold leading-6 text-gray-900">Job Postings</h3>
    </div>
    `,
    `<div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 class="text-base font-semibold leading-6 text-gray-900">Job Postings</h3>
    </div>
    `,
  ];

  onDrop(event: any) {
    this.draggedProduct = event.dragData;
    this.sidebarVisible4 = true;
  }
}
