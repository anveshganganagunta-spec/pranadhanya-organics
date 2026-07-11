import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private phone = '919494131416';
  private defaultMessage = "Hi! I'd like to order from Pranadhanya Organics.";

  get link(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.defaultMessage)}`;
  }

  orderLink(productName: string, qty?: string): string {
    const qtyText = qty ? ` - ${qty}` : '';
    const message = `Hi! I'd like to order ${productName}${qtyText} from Pranadhanya Organics.`;
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;
  }
}
