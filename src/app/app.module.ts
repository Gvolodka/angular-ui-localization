import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { LocalizationService } from './services/localization.service';

function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const AngularMaterialModules = [
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSelectModule,
];

@NgModule({
  imports: [
    ...AngularMaterialModules,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [LocalizationService],
})
export class AppModule {}
