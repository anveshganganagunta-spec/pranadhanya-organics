import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css',
})
export class WhyUsComponent {
  reasons = ['why_1', 'why_2', 'why_3', 'why_4', 'why_5'];
}
