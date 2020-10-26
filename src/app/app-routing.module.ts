import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  SubInitiativesComponent,
  SubInitiativesDetailComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'subiniciative',

    component: SubInitiativesComponent,
  },
  {
    path: 'subiniciative/detail',
    component: SubInitiativesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
