import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  linkElementHtml = document.querySelector<HTMLLinkElement>('#theme');

  constructor() {
    this.init();
  }

  get themeName(): string {
    return localStorage.getItem('themeName') || 'default';
  }

  changeTheme(themeName: string): void {
    localStorage.setItem('themeName', themeName);
    this.linkElementHtml?.setAttribute('href', `assets/css/colors/${themeName}.css`);
  }

  init(): void {
    this.changeTheme(this.themeName);
  }
}
