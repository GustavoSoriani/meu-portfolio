import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratoDiaPageRoutingModule } from './prato-dia-routing.module';

import { PratoDiaPage } from './prato-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratoDiaPageRoutingModule
  ],
  declarations: [PratoDiaPage]
})
export class PratoDiaPageModule {}
