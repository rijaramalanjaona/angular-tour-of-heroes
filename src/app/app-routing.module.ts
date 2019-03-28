import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

/*
In Angular, the best practice is to load and configure the router in a separate,
top-level module that is dedicated to routing and imported by the root AppModule.
By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts in the src/app folder.
ng generate module app-routing --flat --module=app
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.
*/

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  // The method is called forRoot() because you configure the router at the application's root level.
  // The forRoot() method supplies the service providers and directives needed for routing,
  // and performs the initial navigation based on the current browser URL.
  imports: [ RouterModule.forRoot(routes) ],
  // Exporting RouterModule makes router directives available for use in the AppModule components that will need them.
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
