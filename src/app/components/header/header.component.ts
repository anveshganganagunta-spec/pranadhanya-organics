import { Component, inject, signal, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService, Lang } from '../../services/i18n.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  i18n = inject(I18nService);
  menuOpen = signal(false);
  isScrolled = signal(false);

  ngOnInit(): void {
    // Check initial scroll position on load
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const scrolled = window.scrollY > 50;
    this.isScrolled.set(scrolled);
  }

  setLang(lang: Lang): void {
    this.i18n.setLang(lang);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
