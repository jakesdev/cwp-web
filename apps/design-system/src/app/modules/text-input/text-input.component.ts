import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '@cwp/shared/theme';
@Component({
  selector: 'cwp-design-system-text-input',
  standalone: true,
  imports: [CommonModule, TextInputComponent],
  templateUrl: './text-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemTextInputComponent {}
