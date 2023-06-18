import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwp-html-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './html-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlEditorComponent {}
