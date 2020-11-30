import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
