import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories = [
    { label: 'cat_millets', img: 'assets/products/pranadhanya_all_millets.webp', name: 'Millets' },
    { label: 'cat_pulses', img: 'assets/products/daal.webp', name: 'Pulses' },
    { label: 'cat_dryfruits', img: 'assets/products/dry_fruits.webp', name: 'Dry Fruits' },
    { label: 'cat_spices', img: 'assets/products/spices.webp', name: 'Spices' },
  ];
}
