import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'combination'
}, {
  path: 'combination',
  loadChildren: () => import('./combination/combination.module').then(m => m.CombinationModule)
}, {
  path: 'conditional',
  loadChildren: () => import('./conditional/conditional.module').then(m => m.ConditionalModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
