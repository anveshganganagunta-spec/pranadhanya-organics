import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { I18nService } from '../../services/i18n.service';
import { FormsModule } from '@angular/forms';
import { WhatsappService } from '../../services/whatsapp.service';

interface BestSeller {
  key: string;
  image: string;
  photo?: string;
}

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [CommonModule, TranslatePipe, FormsModule],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css',
})
export class BestSellersComponent {
  whatsapp = inject(WhatsappService);
  i18n = inject(I18nService);
  items: BestSeller[] = [
    { key: 'bs_ragi', image: 'assets/products/raagi.webp', photo: 'assets/products/raagi.webp' },
    { key: 'bs_foxtail', image: 'assets/products/foxtile_millets.webp', photo: 'assets/products/foxtile_millets.webp' },
    { key: 'bs_almonds', image: 'assets/products/baadam.webp', photo: 'assets/products/baadam.webp' },
    { key: 'bs_cashews', image: 'assets/products/kaaju.webp', photo: 'assets/products/kaaju.webp' },
    { key: 'bs_jowar', image: 'assets/products/jowar.webp', photo: 'assets/products/jowar.webp' },
    { key: 'bs_butter', image: 'assets/products/daal.webp', photo: 'assets/products/daal.webp' },
  ];
  quantities = ['100g', '200g', '250g', '500g', '1kg', '2kg', '5kg', '10kg'];
  selected: Record<string, string> = this.items.reduce((obj, item) => ({ ...obj, [item.key]: '100g' }), {});

  order(itemKey: string): void {
    const productName = this.i18n.t(itemKey);
    const qty = this.selected[itemKey] || '1kg';
    window.open(this.whatsapp.orderLink(productName, qty), '_blank');
  }
}
