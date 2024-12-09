import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header-button',
  imports: [],
  templateUrl: './HeaderButton.component.html',
  styleUrl: './HeaderButton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderButtonComponent {
  buttonItemContent = input.required<string>();
  select = output<string>();

  onSelect(item: string): void {
    this.select.emit(item);
  }
}
