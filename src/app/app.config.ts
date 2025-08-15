import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import {
  NbThemeModule,
  NbLayoutModule,
  NbToastrModule,
  NbDialogModule,
  NbMenuModule,
  NbDatepickerModule,
  NbTimepickerModule,
  NbCardModule,
  NbSpinnerModule,
  NbButtonModule,
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbCheckboxModule,
  NbAlertModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
        NbThemeModule.forRoot({ name: 'default' }),
        NbLayoutModule,
        NbCardModule,
        NbButtonModule,
        NbInputModule,
        NbFormFieldModule,
        NbIconModule,
        NbCheckboxModule,
        NbAlertModule,
        NbToastrModule.forRoot(),
        NbDialogModule.forRoot(),
        NbMenuModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbTimepickerModule.forRoot(),
        NbEvaIconsModule,
        NbSpinnerModule,
        ReactiveFormsModule
    )
  ],
};