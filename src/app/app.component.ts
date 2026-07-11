import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroCarouselComponent,
    CategoriesComponent,
    BestSellersComponent,
    WhyUsComponent,
    BenefitsComponent,
    RecipesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
