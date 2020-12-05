export interface ThemesAccountSettings {
  name: string;
  isTheme: boolean;
  cssClassLi?: string;
}

export interface Menu {
  title: string;
  icon?: string;
  url?: string;
  submenu?: Menu[];
}
