import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventHeaderComponent } from './nav/event-header.components';
import { GetListComponent } from './api/get-list.component';
import { HttpClientModule } from '@angular/common/http'; // Ajouter cette ligne

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventHeaderComponent,
    EventsThumbnailComponent,
    GetListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Assurez-vous d'ajouter HttpClientModule ici
  ],
  providers: [],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
