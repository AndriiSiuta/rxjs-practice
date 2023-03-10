import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CombinationContainerComponent} from './combination-container.component';
import {CombineAllComponent} from './combine-all/combine-all.component';
import {CombineLatestComponent} from './combine-latest/combine-latest.component';
import {ConcatComponent} from './concat/concat.component';
import {ConcatAllComponent} from './concat-all/concat-all.component';
import {EndWithComponent} from './end-with/end-with.component';
import {ForkJoinComponent} from './fork-join/fork-join.component';

const routes: Routes = [{
  path: '',
  component: CombinationContainerComponent,
  children: [{
    path: 'combine-all',
    component: CombineAllComponent
  }, {
    path: 'combine-latest',
    component: CombineLatestComponent
  }, {
    path: 'concat',
    component: ConcatComponent
  }, {
    path: 'concat-all',
    component: ConcatAllComponent
  }, {
    path: 'end-with',
    component: EndWithComponent,
  }, {
    path: 'forkJoin',
    component: ForkJoinComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CombinationRoutingModule {
  constructor() {
    console.log('CombinationRoutingModule constructor')
  }
}
