import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  whatsapp = inject(WhatsappService);
  mapUrl = 'https://www.google.com/maps/search/?api=1&query=Manikonda%20Hyderabad';
}
