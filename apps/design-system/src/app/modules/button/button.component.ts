import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@cwp/shared/theme';
@Component({
  selector: 'cwp-design-system-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemButtonComponent {}
