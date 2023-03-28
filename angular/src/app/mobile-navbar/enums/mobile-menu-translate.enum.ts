export enum MobileMenuTranslate {
  SettingsTitle = 'mobileMenu.settings.title',
}

export type MobileMenuTranslateValues = {
  [key in MobileMenuTranslate]: string;
};

export const MobileMenuTranslateDefaults: MobileMenuTranslateValues = {
  [MobileMenuTranslate.SettingsTitle]: 'Settings',
};
