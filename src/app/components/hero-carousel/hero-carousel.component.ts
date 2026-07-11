import { Component, ElementRef, OnDestroy, OnInit, inject, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { WhatsappService } from '../../services/whatsapp.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Slide {
  eyebrowKey: string;
  h1MainKey: string;
  h1EmKey: string;
  subKey: string;
  ctaKey: string; // primary button label key
  ctaHref: string; // primary button target
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.css',
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  i18n = inject(I18nService);
  whatsapp = inject(WhatsappService);

  heroRef = viewChild<ElementRef<HTMLElement>>('heroEl');

  slides: Slide[] = [
    { eyebrowKey: 'hero_eyebrow', h1MainKey: 'hero_h1_main', h1EmKey: 'hero_h1_em', subKey: 'hero_sub', ctaKey: 'hero_cta1', ctaHref: '#products' },
    { eyebrowKey: 's2_eyebrow', h1MainKey: 's2_h1_main', h1EmKey: 's2_h1_em', subKey: 's2_sub', ctaKey: 'hero_cta1', ctaHref: '#products' },
    { eyebrowKey: 's3_eyebrow', h1MainKey: 's3_h1_main', h1EmKey: 's3_h1_em', subKey: 's3_sub', ctaKey: 'hero_cta1', ctaHref: '#products' },
    { eyebrowKey: 's4_eyebrow', h1MainKey: 's4_h1_main', h1EmKey: 's4_h1_em', subKey: 's4_sub', ctaKey: 's4_cta1', ctaHref: '#contact' },
  ];

  index = signal(0);
  private timer: ReturnType<typeof setInterval> | null = null;
  private touchStartX: number | null = null;

  ngOnInit(): void {
    this.restart();
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  goTo(i: number): void {
    const len = this.slides.length;
    this.index.set(((i % len) + len) % len);
    this.restart();
  }

  next(): void {
    this.goTo(this.index() + 1);
  }

  prev(): void {
    this.goTo(this.index() - 1);
  }

  pause(): void {
    if (this.timer) clearInterval(this.timer);
  }

  restart(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => this.next(), 5500);
  }

  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchEnd(e: TouchEvent): void {
    if (this.touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(dx) > 40) {
      dx < 0 ? this.next() : this.prev();
    }
    this.touchStartX = null;
  }

  trackVar(): string {
    return `translateX(-${this.index() * 100}%)`;
  }
}
