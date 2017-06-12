import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { JobsComponent } from './jobs/jobs.component';
import { PersonalsComponent } from './personals/personals.component';
import { BitchComponent } from './bitch/bitch.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'personals',
    component: PersonalsComponent
  },
  {
    path: 'bitch',
    component: BitchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
