import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ICON_MAP,
  LpxNavbarItem,
  NavbarService,
  UserProfileService,
} from '@volo/ngx-lepton-x.core';
import { OBSERVE, OBSERVE_PROVIDER, ObserveFn } from 'ng-observe';
import { Subscription } from 'rxjs';

import { MobileMenuTranslate } from './enums/mobile-menu-translate.enum';
import { MobileNavbarService } from './mobile-navbar.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'lpx-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [OBSERVE_PROVIDER, MobileNavbarService],
})
export class MobileNavbarComponent implements OnInit, OnDestroy {
  user = this.observe(this.userProfileService.user$);

  get userProfile() {
    return this.user.value;
  }

  menuVisible = false;

  navTabs!: LpxNavbarItem[];
  selectedMenuItems!: LpxNavbarItem[];

  navbarMenuItems!: LpxNavbarItem[];
  settingsMenuItems!: LpxNavbarItem[];
  profileMenuItems?: LpxNavbarItem[];

  activeMenu: 'navbar' | 'settings' | 'profile' | '' = '';

  icons = ICON_MAP;

  sub = new Subscription();

  settingsTitle = MobileMenuTranslate.SettingsTitle;

  toggleClass = '';

  protected setNavTabs = (items: LpxNavbarItem[]) => {
    this.navTabs = items.filter(item => item.showOnMobileNavbar);
    this.setNavbarMenuItems(items);
  };

  protected setNavbarMenuItems = (items: LpxNavbarItem[]) => {
    this.navbarMenuItems = items?.filter(item => !this.navTabs.includes(item));
  };

  protected setSettingsMenuItems = (items: LpxNavbarItem[]) => {
    this.settingsMenuItems = items;
  };

  protected setProfileActions = (items?: LpxNavbarItem[]) => {
    this.profileMenuItems = items;
  };

  constructor(
    private navbarService: NavbarService,
    private userProfileService: UserProfileService,
    private service: MobileNavbarService,
    @Inject(OBSERVE) private observe: ObserveFn
  ) {}

  ngOnInit(): void {
    this.sub.add(this.navbarService.navbarItems$.subscribe(this.setNavTabs));
    this.sub.add(this.service.settings$.subscribe(this.setSettingsMenuItems));
    this.sub.add(this.service.userProfileActions$.subscribe(this.setProfileActions));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubnavbarExpand(menuItem: LpxNavbarItem): void {
    if (menuItem.expanded) {
      this.navbarMenuItems
        ?.filter(item => item !== menuItem)
        .forEach(item => (item.expanded = false));
    }
  }

  toggleMenu(type: 'navbar' | 'settings' | 'profile', menuItems: LpxNavbarItem[]) {
    this.toggleClass = '';
    if (type === this.activeMenu) {
      if (this.menuVisible) {
        this.closeMenu();
      }
    } else {
      this.menuVisible = true;
      this.activeMenu = type;
      this.selectedMenuItems = menuItems;
    }
  }

  toggleNavbarMenu() {
    this.toggleMenu('navbar', this.navbarMenuItems);
    this.toggleClass = this.menuVisible ? 'lpx-mobile-menu-toggle-open' : '';
  }

  closeMenu() {
    this.toggleClass = '';
    this.activeMenu = '';
    this.menuVisible = false;
  }
}
