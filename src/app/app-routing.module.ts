import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KeepNotesComponent } from './keep-notes/keep-notes.component';

const routes: Routes = [
  { path: '',component: SigninComponent},
  { path: 'home', component: NavbarComponent, children: [
    { path: '', component: DashboardComponent},
    { path: 'keep-notes', component: KeepNotesComponent}]
  },
  { path: 'keep-notes', redirectTo: 'home/keep-notes',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
