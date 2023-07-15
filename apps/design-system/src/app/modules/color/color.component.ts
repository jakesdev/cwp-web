import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwp-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorComponent {}
