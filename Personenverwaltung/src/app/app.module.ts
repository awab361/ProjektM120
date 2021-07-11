import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { UeberunsComponent } from './ueberuns/ueberuns.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { InfoComponent } from './info/info.component';
import { PersonenComponent } from './personen/personen.component';
import { AbteilungenComponent } from './abteilungen/abteilungen.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { SpesenComponent } from './spesen/spesen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents, // Alle Componente die wir im routing module hatten, die wurden alle zusammen exportiert
    UeberunsComponent,
    KontaktComponent,
    InfoComponent,
    PersonenComponent,
    AbteilungenComponent,
    ProjekteComponent,
    SpesenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

