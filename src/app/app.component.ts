import { Component } from '@angular/core';
import { Languages, LANGUAGES_LIST } from './enums/languages.enum';

import { LocalizationService } from './services/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selectedLanguage = this.localizationService.language;
  public languagesList = LANGUAGES_LIST;

  constructor(private localizationService: LocalizationService) {
    localizationService.setLanguage(this.selectedLanguage);
  }

  public changeLanguage(language: Languages): void {
    this.selectedLanguage = language;
    this.localizationService.setLanguage(this.selectedLanguage);
  }
}
