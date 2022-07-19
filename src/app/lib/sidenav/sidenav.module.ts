import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';

@NgModule({
  declarations: [SidenavComponent, SidenavItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
