import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


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
  @Input() type: 'primary' | 'primary-outline' | 'secondary' | 'danger' | 'danger-outline'  = 'primary';
  @Input() leftIcon: any;
  @Input() rightIcon: any;

  @Output() buttonClick = new EventEmitter<void>;

  click() {
    this.buttonClick.emit();
  }
}
