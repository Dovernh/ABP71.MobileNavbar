import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LPX_TRANSLATE_TOKEN,
  LpxAvatarModule,
  LpxBrandLogoModule,
  LpxIconModule,
  LpxNavbarModule,
  LpxTranslateModule,
  ToObservableModule,
} from '@volo/ngx-lepton-x.core';

import { MobileMenuTranslateDefaults } from './enums/mobile-menu-translate.enum';
import { MobileNavbarComponent } from './mobile-navbar.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [MobileNavbarComponent, AlertsComponent],
  imports: [
    CommonModule,
    RouterModule,
    LpxAvatarModule,
    LpxBrandLogoModule,
    LpxIconModule,
    LpxNavbarModule,
    LpxTranslateModule,
    ToObservableModule,
  ],
  exports: [MobileNavbarComponent],
})
export class LpxMobileNavbarModule {
  static forRoot(): ModuleWithProviders<LpxMobileNavbarModule> {
    return {
      ngModule: LpxMobileNavbarModule,
      providers: [
        {
          provide: LPX_TRANSLATE_TOKEN,
          useValue: [MobileMenuTranslateDefaults],
          multi: true,
        },
      ],
    };
  }
}
