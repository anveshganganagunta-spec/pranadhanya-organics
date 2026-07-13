import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { WhatsappService } from '../../services/whatsapp.service';
import { HeaderComponent } from '../header/header.component';

interface CategoryProduct {
  key: string;
  label: string;
  image: string;
}

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, TranslatePipe],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css',
})
export class CategoryDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  whatsapp = inject(WhatsappService);

  categoryName = '';
  categoryLabel = '';
  products: CategoryProduct[] = [];
  quantities = ['100g', '200g', '250g', '500g', '1kg', '2kg', '5kg', '10kg'];
  selected: Record<string, string> = {};

  private productMap: Record<string, CategoryProduct[]> = {
    Millets: [
      { key: 'little_millet', label: 'prod_little_millet', image: 'assets/products/little_millet.png' },
      { key: 'foxtail_millet', label: 'prod_foxtail_millet', image: 'assets/products/foxtail_millet.png' },
      { key: 'barnyard_millet', label: 'prod_barnyard_millet', image: 'assets/products/barnyard_millet.png' },
      { key: 'kodo_millet', label: 'prod_kodo_millet', image: 'assets/products/kodo_millet.png' },
      { key: 'browntop_millet', label: 'prod_browntop_millet', image: 'assets/products/browntop_millet.png' },
      { key: 'pearl_millet', label: 'prod_pearl_millet', image: 'assets/products/pearl_millet.png' },
      { key: 'finger_millet', label: 'prod_finger_millet', image: 'assets/products/finger_millet.png' },
      { key: 'sorghum', label: 'prod_sorghum', image: 'assets/products/sorghum.png' },
    ],
    Pulses: [
      { key: 'green_gram', label: 'prod_green_gram', image: 'assets/products/daal.webp' },
      { key: 'toor_dal', label: 'prod_toor_dal', image: 'assets/products/daal.webp' },
      { key: 'chana_dal', label: 'prod_chana_dal', image: 'assets/products/daal.webp' },
      { key: 'urad_dal', label: 'prod_urad_dal', image: 'assets/products/daal.webp' },
      { key: 'masoor_dal', label: 'prod_masoor_dal', image: 'assets/products/daal.webp' },
      { key: 'rajma', label: 'prod_rajma', image: 'assets/products/daal.webp' },
    ],
    'Dry Fruits': [
      { key: 'almonds', label: 'prod_almonds', image: 'assets/products/baadam.webp' },
      { key: 'cashews', label: 'prod_cashews', image: 'assets/products/kaaju.webp' },
      { key: 'walnuts', label: 'prod_walnuts', image: 'assets/products/baadam.webp' },
      { key: 'raisins', label: 'prod_raisins', image: 'assets/products/baadam.webp' },
      { key: 'pistachios', label: 'prod_pistachios', image: 'assets/products/baadam.webp' },
      { key: 'dates', label: 'prod_dates', image: 'assets/products/baadam.webp' },
      { key: 'dry_apricots', label: 'prod_dry_apricots', image: 'assets/products/baadam.webp' },
    ],
    Spices: [
      { key: 'turmeric_powder', label: 'prod_turmeric_powder', image: 'assets/products/spices.webp' },
      { key: 'chilli_powder', label: 'prod_chilli_powder', image: 'assets/products/spices.webp' },
      { key: 'coriander_powder', label: 'prod_coriander_powder', image: 'assets/products/spices.webp' },
      { key: 'cumin_powder', label: 'prod_cumin_powder', image: 'assets/products/spices.webp' },
      { key: 'black_pepper_powder', label: 'prod_black_pepper_powder', image: 'assets/products/spices.webp' },
      { key: 'garam_masala', label: 'prod_garam_masala', image: 'assets/products/spices.webp' },
      { key: 'groundnut', label: 'prod_groundnut', image: 'assets/products/spices.webp' },
      { key: 'groundnut_oil', label: 'prod_groundnut_oil', image: 'assets/products/spices.webp' },
      { key: 'groundnut_chutney_powder', label: 'prod_groundnut_chutney_powder', image: 'assets/products/spices.webp' },
    ],
  };

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category') || 'Millets';
      this.setCategory(category);
    });
  }

  private setCategory(category: string): void {
    this.categoryName = category;
    this.categoryLabel = category;
    this.products = this.productMap[category] ?? [];
    this.selected = this.products.reduce((acc, product) => ({ ...acc, [product.key]: '100g' }), {} as Record<string, string>);
  }

  order(product: CategoryProduct): void {
    const qty = this.selected[product.key] || '100g';
    window.open(this.whatsapp.orderLink(product.label, qty), '_blank');
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
