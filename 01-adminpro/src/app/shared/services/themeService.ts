import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  linkElementHtml = document.querySelector<HTMLLinkElement>('#theme');

  constructor() { }

  get themeName(): string {
    return localStorage.getItem('themeName') || 'default';
  }

  setThemeUrl(themeName: string): void {
    localStorage.setItem('themeName', themeName);
    this.linkElementHtml?.setAttribute('href', `assets/css/colors/${themeName}.css`);
  }

  init(): void {
    this.setThemeUrl(this.themeName);
  }
}
