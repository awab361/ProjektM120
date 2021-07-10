import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UeberunsComponent } from './ueberuns/ueberuns.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu', component: MainMenuComponent},
  {path: 'menu/ueberuns', component: UeberunsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const routingComponents = [MainMenuComponent]
