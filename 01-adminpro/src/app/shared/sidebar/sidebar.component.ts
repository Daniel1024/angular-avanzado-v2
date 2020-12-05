import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Menu } from '../models/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: Menu[] = [];

  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.menu;
  }

}
