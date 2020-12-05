import { Component } from '@angular/core';
import { ThemeService } from './shared/services/themeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpro';

  constructor(
    themeService: ThemeService
  ) {
    themeService.init();
  }
}
