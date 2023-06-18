import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwp-introducing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introducing.component.html',
  styleUrls: ['./introducing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroducingComponent {}
