import { Component } from '@angular/core';

@Component({
  selector: 'cwp-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'design-system';

  menu = [
    {
      title: 'Introducing',
      icons: '',
      url: '',
    },
    // {
    //   title: 'Theme',
    //   icons :'',
    //   url :'/theme'
    // },
    // {
    //   title: 'Color Pallete',
    //   icons :'',
    //   url :'/color-pallete'
    // }
  ];

  components = [
    {
      index: 1,
      url: '/button',
      title: 'Button Component',
    },
    {
      index: 2,
      url: '/badge',
      title: 'Badge Component',
    },
    {
      index: 3,
      url: '/text-input',
      title: 'Text Input Component',
    },
    {
      index: 4,
      url: '/text-input',
      title: 'Loanding Component',
    },
    // {
    //   url: '/accordion',
    //   title: 'AccordionComponent',
    // },
    // {
    //   url: '/carousel',
    //   title: 'CarouselComponent',
    // },
    // {
    //   url: '/help-text',
    //   title: 'HelpTextComponent',
    // },
    // {
    //   url: '/html-editor',
    //   title: 'HtmlEditorComponent',
    // },
  ];
}
