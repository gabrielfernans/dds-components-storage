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
    return this.findNode(this.currentRoute, item);
  }

  findNode(route: any, currentNode: any): any {
    var i, currentChild, result;

    if (route == currentNode.route) {
      return true;
    } else {
      // Use a for loop instead of forEach to avoid nested functions
      // Otherwise "return" will not work properly
      for (i = 0; i < currentNode?.children?.length; i += 1) {
        currentChild = currentNode?.children[i];

        // Search in the current child
        result = this.findNode(route, currentChild);

        // Return the result if the node has been found
        if (result !== false) {
          return true;
        }
      }

      // The node has not been found and we have no more options
      return false;
    }
  }
}
