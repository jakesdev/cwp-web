import { Route } from '@angular/router';
import {
  AccordionComponent,
  BadgeComponent,
  DesignSystemButtonComponent,
  CarouselComponent,
  HelpTextComponent,
  HtmlEditorComponent,
  IntroducingComponent,
  DesignSystemTextInputComponent,
} from './modules';
import { TypographyComponent } from './modules/typography/typography.component';
import { ColorComponent } from './modules/color/color.component';

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
    path: 'color',
    component: ColorComponent,
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
    component: DesignSystemTextInputComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
];
