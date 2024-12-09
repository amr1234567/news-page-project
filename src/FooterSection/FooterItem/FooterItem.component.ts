import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  imports: [CommonModule],
  templateUrl: './FooterItem.component.html',
  styleUrl: './FooterItem.component.scss',
})
export class FooterItemComponent {
  item = input.required<{
    id: number;
    title: string;
    describtion: string;
    imageSrc: string;
  }>();
}
