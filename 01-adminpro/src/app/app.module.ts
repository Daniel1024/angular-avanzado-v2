import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    RouterModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
