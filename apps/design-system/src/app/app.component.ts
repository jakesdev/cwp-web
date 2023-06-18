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
      icons :'',
      url :''
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
  ]

  components = [
    {
      url: '/button',
      title: 'ButtonComponent',
    },
    {
      url: '/badge',
      title: 'BadgeComponent',
    },
    {
      url: '/accordion',
      title: 'AccordionComponent',
    },
    {
      url: '/carousel',
      title: 'CarouselComponent',
    },
    {
      url: '/help-text',
      title: 'HelpTextComponent',
    },
    {
      url: '/html-editor',
      title: 'HtmlEditorComponent',
    },
    {
      url: '/text-input',
      title: 'TextInputComponent',
    },
  ]
}
