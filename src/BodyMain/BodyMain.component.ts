import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-body-main',
  imports: [],
  templateUrl: './BodyMain.component.html',
  styleUrl: './BodyMain.component.scss',
})
export class BodyMainComponent {
  bttonTitle = input.required<string>();
}
