import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwp-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyComponent {}
