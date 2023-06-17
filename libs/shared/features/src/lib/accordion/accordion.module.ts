import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { Accordion1PopupComponent } from './accordion-1-popup/accordion-1-popup.component';
import { Accordion1UiComponent } from './accordion-1-ui/accordion-1-ui.component';


@NgModule({
  declarations: [Accordion1UiComponent, Accordion1PopupComponent],
  exports: [Accordion1UiComponent, Accordion1PopupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatExpansionModule, CdkAccordionModule],
})
export class AccordionComponentModule {}
