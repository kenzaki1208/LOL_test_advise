import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviseComponent } from './components/advise/advise.component';
import { RuneComponent } from './components/rune/rune.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {
    component: AdviseComponent,
    path: 'advise',
    title: 'Advise',
  },
  {
    component: RuneComponent,
    path: 'rune',
    title: 'Rune',
  },
  {
    component: ItemsComponent,
    path: 'items',
    title: 'Items',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
