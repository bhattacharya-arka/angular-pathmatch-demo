import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullMatchComponent } from './full-match/full-match.component';
import { PrefixMatchComponent } from './prefix-match/prefix-match.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'full', component: FullMatchComponent, pathMatch: 'full' },
    { path: 'prefix', component: PrefixMatchComponent, pathMatch: 'prefix' },
    // Child route to demonstrate prefix matching
    { path: 'prefix/child', component: PrefixMatchComponent }
  ];
  