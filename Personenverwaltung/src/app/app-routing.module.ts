import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbteilungenComponent } from './abteilungen/abteilungen.component';
import { InfoComponent } from './info/info.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PersonenComponent } from './personen/personen.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { SpesenComponent } from './spesen/spesen.component';
import { UeberunsComponent } from './ueberuns/ueberuns.component';


// Hier sind alle Routen augelistet mit die Klassen die man importieren muss
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu', component: MainMenuComponent},
  {path: 'menu/ueberuns', component: UeberunsComponent},
  {path: 'menu/kontakt', component: KontaktComponent},
  {path: 'menu/info', component: InfoComponent},
  {path: 'menu/personen', component: PersonenComponent},
  {path: 'menu/abteilungen', component: AbteilungenComponent},
  {path: 'menu/projekte', component: ProjekteComponent},
  {path: 'menu/spesen', component: SpesenComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
// Da werden alle Routen/Klassen exportiert die werden zusammen exportiert um es zu verhindern dass wir die Liste im app module immer aktualisieren müssen 
export const routingComponents = [MainMenuComponent]
