import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  whatsapp = inject(WhatsappService);

  quantities = ['100g', '200g', '250g', '500g', '1kg', '2kg', '5kg', '10kg'];
  categories = [
    { label: 'cat_millets', img: 'assets/products/pranadhanya_all_millets.webp', photo: 'assets/products/pranadhanya_all_millets.webp', name: 'Millets' },
    { label: 'cat_pulses', img: 'assets/products/daal.webp', photo: 'assets/products/daal.webp', name: 'Pulses' },
    { label: 'cat_dryfruits', img: 'assets/products/dry_fruits.webp', photo: 'assets/products/dry_fruits.webp', name: 'Dry Fruits' },
    { label: 'cat_spices', img: 'assets/products/spices.webp', photo: 'assets/products/spices.webp', name: 'Spices' },
  ];

  selected: Record<string, string> = this.categories.reduce((obj, category) => ({
    ...obj,
    [category.name]: '100g',
  }), {} as Record<string, string>);

  order(categoryName: string): void {
    const qty = this.selected[categoryName] || '100g';
    window.open(this.whatsapp.orderLink(categoryName, qty), '_blank');
  }
}
