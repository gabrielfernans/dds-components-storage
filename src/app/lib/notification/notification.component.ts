import { Component, Input, OnInit } from '@angular/core';
import { DdsComponent } from '../helpers/dds.component';
import { stringToBoolean } from '../helpers/dds.helpers';

@Component({
  selector: 'dds-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent extends DdsComponent {
  @Input() closeIcon: any = `true`;
  @Input() messageBody: string = ``;
  @Input() title: string = ``;
  @Input() primaryActionText: string = ``;
  @Input() secondaryActionText: string = ``;
  @Input() timeStamp: string = ``;

  override ngOnInit(): void {
    this.closeIcon = stringToBoolean(this.closeIcon);
  }

  clicked() {
    alert('Clicked works!');
  }
}
