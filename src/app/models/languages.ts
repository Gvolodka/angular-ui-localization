export enum Languages {
  En = 'en-US',
  De = 'de-DE',
  Ru = 'ru-RU',
}

interface LanguageOption {
  code: Languages;
  name: string;
}

export const LANGUAGES_LIST: LanguageOption[] = [
  { code: Languages.En, name: 'English' },
  { code: Languages.De, name: 'Deutsch' },
  { code: Languages.Ru, name: 'Русский' },
];
