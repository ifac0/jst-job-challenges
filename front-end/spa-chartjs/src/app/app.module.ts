import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { GrafbarComponent } from './grafbar/grafbar.component';
import { ListclimaComponent } from './listclima/listclima.component';
import { GraflinComponent } from './graflin/graflin.component';
import { CompboxComponent } from './compbox/compbox.component';
import { CampsearchComponent } from './campsearch/campsearch.component';

import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  

@NgModule({
  declarations: [
    AppComponent,
    GrafbarComponent,
    ListclimaComponent,
    GraflinComponent,
    CompboxComponent,
    CampsearchComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [WeatherService],
  bootstrap: [
              AppComponent, 
              GrafbarComponent, 
              ListclimaComponent,
              GraflinComponent,
              CompboxComponent,
              CampsearchComponent,
              CarouselComponent
            ]
})
export class AppModule { }
