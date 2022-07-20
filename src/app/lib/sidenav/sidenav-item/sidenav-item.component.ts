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
      } else {
        this.item.expanded = !this.item.expanded;
      }
    }
  }

  emitEvent(): void {
    this.switchState.emit();
  }

  isActive(item: ISidenavItem): boolean {
    if (this.currentRoute === '') this.currentRoute = '/';
    let value: any = false;

    if (item.route === this.currentRoute) {
      value = true;
    } else {
      if (item.childs) {
        item.childs.forEach((child) => {
          if (this.isActiveRecursive(child) === true) {
            value = this.isActiveRecursive(child);
          }
        });
      }
    }
    // console.log(value);
    return value;
  }

  isActiveRecursive(item: ISidenavItem): boolean | undefined {
    if (item.route === this.currentRoute) {
      return true;
    } else {
      if (item.childs) {
        item.childs.forEach((child) => {
          if (this.isActiveRecursive(child) === true) {
            return this.isActiveRecursive(child);
          }
        });
      }
    }
  }
}
