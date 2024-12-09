import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BodyNavItemComponent } from "./BodyNavItem/BodyNavItem.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-body-navigation',
  imports: [BodyNavItemComponent, NgFor],
  templateUrl: './BodyNavigation.component.html',
  styleUrl: './BodyNavigation.component.scss',
})
export class BodyNavigationComponent {
  items = input.required<{
    id: number;
    title: string;
    describtion: string;
  }[]>();
}
