# Pranadhanya Organics — Angular App

A bilingual (English / Telugu) single-page site for Pranadhanya Organics, built with
Angular 17 standalone components and signals.

## Structure

```
src/
  app/
    services/
      i18n.service.ts       -> language state (signal) + all EN/TE translations
      whatsapp.service.ts   -> builds the WhatsApp order link
    pipes/
      translate.pipe.ts     -> {{ 'key' | translate }}, re-runs on language change
    components/
      header/                -> nav bar + language toggle + mobile menu
      hero-carousel/          -> sliding banner (autoplay, arrows, dots, swipe)
      categories/              -> Millets / Pulses / Dry Fruits / Spices
      best-sellers/            -> horizontal scroll of top products
      why-us/                   -> checklist + about copy
      benefits/                 -> health benefit cards
      recipes/                  -> recipe cards
      gallery/                  -> illustrated product tiles
      contact/                  -> phone / WhatsApp / email / map
      footer/
    app.component.ts        -> composes all sections
  styles.css                 -> design tokens (colors, fonts) + shared classes
  index.html                 -> loads Google Fonts (Fraunces, Karla, Noto Telugu)
```

## Run it

```bash
npm install
npm start        # ng serve, opens on http://localhost:4200
```

## Build for production

```bash
npm run build     # outputs to dist/pranadhanya-organics
```

## Notes

- All product/category imagery is hand-drawn inline SVG (no external image files) —
  swap in real photos by replacing the `<svg class="gal-img">` / `<svg class="slide-art">`
  blocks with `<img [src]="...">` tags pointing at files placed in `src/assets/`.
- WhatsApp number and email live in `whatsapp.service.ts` and `contact.component.html` —
  update both if the business contact details change.
- Language toggle state lives in `I18nService.lang` (a signal); add new strings by adding
  a key to `TRANSLATIONS` in `i18n.service.ts` and referencing it with the `translate` pipe.
