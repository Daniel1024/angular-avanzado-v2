import { Component, OnInit } from '@angular/core';
import { ThemesAccountSettings } from '../../shared/models/interfaces';
import { ThemeService } from '../../shared/services/themeService';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  themes: ThemesAccountSettings[] = [
    { name: 'Con el sidebar claro', isTheme: false },
    { name: 'default', isTheme: true },
    { name: 'green', isTheme: true },
    { name: 'red', isTheme: true },
    { name: 'blue', isTheme: true },
    { name: 'purple', isTheme: true },
    { name: 'megna', isTheme: true },
    { name: 'Con el sidebar oscuro', isTheme: false, cssClassLi: 'd-block m-t-30' },
    { name: 'default-dark', isTheme: true },
    { name: 'green-dark', isTheme: true },
    { name: 'red-dark', isTheme: true },
    { name: 'blue-dark', isTheme: true },
    { name: 'purple-dark', isTheme: true },
    { name: 'megna-dark', isTheme: true },
  ];
  themeSelected = 'default';

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.themeSelected = this.themeService.themeName;
  }

  changeTheme(themeName: string): void {
    this.themeService.setThemeUrl(themeName);
    this.themeSelected = themeName;
  }

  setClassLi(name: string): string {
    const working = (this.themeSelected === name) ? ' working' : '';
    return `selector ${name}-theme${working}`;
  }

}
