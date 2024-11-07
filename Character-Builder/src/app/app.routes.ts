import { Routes } from '@angular/router';
import { BuildComponent } from './build/build.component';
import { RandomizerComponent } from './randomizer/randomizer.component';

export const routes: Routes = [
  {path: 'build', component: BuildComponent},
  {path: 'randomizer', component: RandomizerComponent},
  {path: '', redirectTo: '/build', pathMatch: 'full'},
];
