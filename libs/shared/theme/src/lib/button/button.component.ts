import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'cwp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() text = '';
  @Input() type: 'primary' | 'primary-outline' | 'cancel'  = 'primary';

  @Output() buttonClick = new EventEmitter<void>;

  click() {
    this.buttonClick.emit();
  }
}
