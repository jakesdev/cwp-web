import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwp-help-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpTextComponent {}
