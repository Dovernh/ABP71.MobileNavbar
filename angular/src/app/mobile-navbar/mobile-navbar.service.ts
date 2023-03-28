import { Injectable } from '@angular/core';
import { LanguageService, LpxNavbarItem, UserProfileService } from '@volo/ngx-lepton-x.core';
import { ThemeService } from '@volosoft/ngx-lepton-x';
import { map } from 'rxjs/operators';

import { combineAndFilterByChildren } from './stream-utils';

export interface MobileNavbarState {
  settings: LpxNavbarItem[];
}

@Injectable()
export class MobileNavbarService {
  settings$ = combineAndFilterByChildren([
    this.themeService.stylesAsSettingsGroup$,
    this.languageService.languagesAsSettingsGroup$,
  ]);

  userProfileActions$ = this.userProfileService.user$.pipe(
    map(user => user.userActionGroups?.reduce((acc, curr) => acc.concat(curr), []))
  );

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private userProfileService: UserProfileService
  ) { }
}
