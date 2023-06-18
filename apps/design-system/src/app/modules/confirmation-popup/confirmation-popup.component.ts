import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwp-confirmation-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-popup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationPopupComponent {}
