import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../Header/Header.component";
import { BodyMainComponent } from "../BodyMain/BodyMain.component";
import { BodyNavigationComponent } from "../BodyNavigation/BodyNavigation.component";
import { FooterSectionComponent } from "../FooterSection/FooterSection.component";

const NavItems = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    describtion: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    describtion: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    describtion: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
  },
];

const FooterItems = [
  {
    id: 1,
    title: "  Reviving Retro PCs",
    describtion: " What happens when old PCs are given modern upgrades?",
    imageSrc: "/images/image-retro-pcs.jpg"
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    describtion: "Our best picks for various needs and budgets.",
    imageSrc: "/images/image-top-laptops.jpg"
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    describtion: "How the pandemic has sparked fresh opportunities.",
    imageSrc: "/images/image-gaming-growth.jpg"
  },
];

const headerButtons = [
  "Home",
  "New",
  "Popular",
  "Trending",
  "Categories"

]

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BodyMainComponent, BodyNavigationComponent, FooterSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'news-page-project';
  navItems = signal(NavItems);
  footerItems = signal(FooterItems);
  headerButtons = signal(headerButtons);
}
