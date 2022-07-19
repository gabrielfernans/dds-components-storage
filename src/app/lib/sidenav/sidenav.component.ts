import { Component, Input, OnInit } from '@angular/core';
import { ISidenavItem } from 'src/app/core/models/sidenav.model';

@Component({
  selector: `dds-sidenav`,
  templateUrl: `./sidenav.component.html`,
  styleUrls: [`./sidenav.component.scss`],
})
export class SidenavComponent implements OnInit {
  @Input() data?: ISidenavItem[];
  @Input() currentRoute?: string;
  opened: boolean = false;
  constructor() {}

  ngOnInit() {}

  switchState(): void {
    this.opened = !this.opened;
  }
}
