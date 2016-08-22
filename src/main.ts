import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { appRouterProviders } from './app/app.routes';
import { AppComponent, environment } from './app/';
import {disableDeprecatedForms, provideForms} from "@angular/forms";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms()
    ]);
