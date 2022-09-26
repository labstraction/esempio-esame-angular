import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersPageComponent } from './components/beers-page/beers-page.component';

const routes: Routes = [
  { path: 'birre', component: BeersPageComponent },
  { path: '', redirectTo: '/birre', pathMatch: 'full' },
  { path: '**', redirectTo: '/birre' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
