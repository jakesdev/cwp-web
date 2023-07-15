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
            url: '/color',
            title: 'Color',
        },
        {
            index: 1,
            url: '/typography',
            title: 'Typography',
        },
        {
            index: 2,
            url: '/button',
            title: 'Button',
        },
        {
            index: 3,
            url: '/badge',
            title: 'Badge',
        },
        {
            index: 4,
            url: '/text-input',
            title: 'Text Input',
        },
        {
            index: 5,
            url: '/app-loading',
            title: 'Loading Component',
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
