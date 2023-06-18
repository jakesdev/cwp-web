import { Route } from '@angular/router';
import { AccordionComponent, BadgeComponent, DesignSystemButtonComponent, CarouselComponent, HelpTextComponent, HtmlEditorComponent, IntroducingComponent, TextInputComponent } from './modules';

export const appRoutes: Route[] = [
  {
    path: '',
    component: IntroducingComponent,
  },
  {
    path: 'button',
    component: DesignSystemButtonComponent,
  },
  {
    path: 'badge',
    component: BadgeComponent,
  },
  {
    path: 'accordion',
    component: AccordionComponent,
  },
  {
    path: 'carousel',
    component: CarouselComponent,
  },
  {
    path: 'help-text',
    component: HelpTextComponent,
  },
  {
    path: 'html-editor',
    component: HtmlEditorComponent,
  },
  {
    path: 'text-input',
    component: TextInputComponent,
  },
];
