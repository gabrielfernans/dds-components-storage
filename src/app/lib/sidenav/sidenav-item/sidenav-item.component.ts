import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISidenavItem } from 'src/app/core/models/sidenav.model';

@Component({
  selector: 'dds-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnInit {
  @Input() item!: ISidenavItem;
  @Input() opened!: boolean;
  @Input() child!: boolean;
  @Input() currentRoute?: string;
  @Output() switchState = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleClick(): void {
    if (this.item?.route) {
      this.switchState.emit();
      this.router.navigate([this.item?.route]);
    } else {
      if (this.opened === false) {
        this.switchState.emit();
      }
    }
  }

  emitEvent(): void {
    this.item.expanded = false;
    this.switchState.emit();
  }

  isActive(item: ISidenavItem): boolean | void {
    if (this.currentRoute === '') this.currentRoute = '/';
    return item.route === this.currentRoute;
  }
}
