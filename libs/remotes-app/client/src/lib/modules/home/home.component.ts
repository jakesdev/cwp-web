import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppLayoutModule } from '@cwp/shared/layout';

@Component({
  selector: 'cwp-home',
  standalone: true,
  imports: [CommonModule, AppLayoutModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
