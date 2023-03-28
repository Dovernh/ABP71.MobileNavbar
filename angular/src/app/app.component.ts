import { ReplaceableComponentsService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { eThemeLeptonXComponents } from '@volosoft/abp.ng.theme.lepton-x';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <abp-gdpr-cookie-consent></abp-gdpr-cookie-consent>
  `,
})
export class AppComponent {
  constructor(private replaceableComponents: ReplaceableComponentsService) {
    this.replaceableComponents.add({
      component: MobileNavbarComponent,
      key: eThemeLeptonXComponents.NavbarMobile,
    });
  }
}
