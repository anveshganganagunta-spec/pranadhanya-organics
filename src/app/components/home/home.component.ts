import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { CategoriesComponent } from '../categories/categories.component';
import { BestSellersComponent } from '../best-sellers/best-sellers.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
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
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
