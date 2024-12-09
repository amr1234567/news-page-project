import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-body-nav-item',
  imports: [NgIf],
  templateUrl: './BodyNavItem.component.html',
  styleUrl: './BodyNavItem.component.scss',
})
export class BodyNavItemComponent {
  item = input.required<{
    id: number;
    title: string;
    describtion: string;
  }>();
  isLast = input.required<boolean>();
}
