import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appProviders } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), ...appProviders],
};
