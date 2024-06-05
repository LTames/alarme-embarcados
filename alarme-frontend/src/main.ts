import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePtBr, 'pt-BR');

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
