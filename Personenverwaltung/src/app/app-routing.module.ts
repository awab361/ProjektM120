import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UeberunsComponent } from './ueberuns/ueberuns.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu', component: MainMenuComponent},
  {path: 'menu/ueberuns', component: UeberunsComponent},
  {path: 'menu/kontakt', component: KontaktComponent},
  {path: 'menu/info', component: InfoComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const routingComponents = [MainMenuComponent]
