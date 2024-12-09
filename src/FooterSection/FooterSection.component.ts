import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FooterItemComponent } from "./FooterItem/FooterItem.component";

@Component({
  selector: 'app-footer-section',
  imports: [FooterItemComponent],
  templateUrl: './FooterSection.component.html',
  styleUrl: './FooterSection.component.scss',
})
export class FooterSectionComponent {
  items = input.required<{
    id: number;
    title: string;
    describtion: string;
    imageSrc: string;
  }[]>();
}
