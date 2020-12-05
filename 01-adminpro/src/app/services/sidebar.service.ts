import { Injectable } from '@angular/core';
import { Menu } from '../shared/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: Menu[] = [
    { title: 'Dashboard', icon: 'mdi mdi-gauge', submenu: [
        { title: 'Main', url: '/' },
        { title: 'Progressbar', url: 'progress' },
        { title: 'Charts', url: 'grafica1' },
      ] }
  ];

  constructor() { }
}
