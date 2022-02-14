import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Languages } from '../models/languages';

export const DEFAULT_LANGUAGE: Languages = Languages.En;

@Injectable()
export class LocalizationService {
  public language = DEFAULT_LANGUAGE;

  constructor(private translateService: TranslateService) {}

  public setLanguage(language: Languages): void {
    this.language = language;
    this.translateService.use(language);
  }
}
