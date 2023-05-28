import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratoDiaPage } from './prato-dia.page';

const routes: Routes = [
  {
    path: '',
    component: PratoDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratoDiaPageRoutingModule {}
