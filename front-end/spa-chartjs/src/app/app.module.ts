import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { GrafbarComponent } from './grafbar/grafbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GrafbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent, GrafbarComponent]
})
export class AppModule { }
