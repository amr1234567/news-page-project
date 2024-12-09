import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeaderButtonComponent } from "./HeaderButton/HeaderButton.component";

@Component({
  selector: 'app-header',
  imports: [HeaderButtonComponent],
  templateUrl: './Header.component.html',
  styleUrl: './Header.component.scss',
  host: {
    class: 'header-continer',
  }
})
export class HeaderComponent {
  items = input.required<string[]>()
  activeId = "Home";

  onSelect(item: string): void {
    this.activeId = item;
  }
}
