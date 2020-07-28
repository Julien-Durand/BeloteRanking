import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {HomeComponent} from './components/home/home.component';
import {JoueurFormComponent} from './components/joueur-form/joueur-form.component';
import {AuthGuard} from './services/auth-guard';
import {BeloteFormComponent} from "./components/belote-form/belote-form.component";


const routes: Routes = [
  { path: 'BeloteRanking/sign-up', component: SignUpComponent },
  { path: 'BeloteRanking/sign-in', component: SignInComponent },
  { path: 'BeloteRanking', component: HomeComponent },
  { path: 'BeloteRanking/Joueur', canActivate: [AuthGuard], component: JoueurFormComponent },
  { path: 'BeloteRanking/Belote', canActivate: [AuthGuard], component: BeloteFormComponent },
  { path: '', redirectTo: 'BeloteRanking', pathMatch: 'full' },
  { path: '**', redirectTo: 'BeloteRanking'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
