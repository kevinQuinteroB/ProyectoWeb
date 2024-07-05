import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JuegoComponent } from './juego/juego.component';
import { PerfiljugadorComponent } from './perfiljugador/perfiljugador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JuegoComponent,
    PerfiljugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
