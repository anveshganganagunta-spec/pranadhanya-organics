import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Recipe {
  titleKey: string;
  descKey: string;
  gradient: string;
}

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipes: Recipe[] = [
    { titleKey: 'rec_1_title', descKey: 'rec_1_desc', gradient: 'linear-gradient(135deg,#C98A2B,#7A3428)' },
    { titleKey: 'rec_2_title', descKey: 'rec_2_desc', gradient: 'linear-gradient(135deg,#1F3D2B,#E6B85C)' },
    { titleKey: 'rec_3_title', descKey: 'rec_3_desc', gradient: 'linear-gradient(135deg,#7A3428,#C98A2B,#1F3D2B)' },
  ];
}
