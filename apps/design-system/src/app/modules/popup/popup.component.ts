import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwp-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent {}
