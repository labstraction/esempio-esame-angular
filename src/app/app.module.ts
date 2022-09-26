import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { BeersPageComponent } from './components/beers-page/beers-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersPageComponent,
    BeerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
