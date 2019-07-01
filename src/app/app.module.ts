import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { RideListComponent } from './riding-list/riding-list.component';
import { MapComponent } from './map/map.component';

import { RideService } from './services/ride.service';
import { MapService } from './services/map.service';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    RideListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RideService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
