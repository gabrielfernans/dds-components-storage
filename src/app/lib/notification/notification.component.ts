import { Component, Input, OnInit } from '@angular/core';
import { DdsComponent } from '../helpers/dds.component';
import { stringToBoolean } from '../helpers/dds.helpers';

@Component({
  selector: 'dds-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent extends DdsComponent implements OnInit {
  @Input() closeIcon: any = `true`;
  @Input() messageBody: string = ``;
  @Input() title: string = ``;
  @Input() primaryActionText: string = ``;
  @Input() secondaryActionText: string = ``;
  timeStamp: string = ``;

  override ngOnInit(): void {
    super.ngOnInit;
    this.closeIcon = stringToBoolean(this.closeIcon);
    this.ddsInitializer = `Notification`;
    this.updatetime();
  }

  clicked() {
    alert('Clicked works!');
  }

  toggle() {
    this.closeIcon = !this.closeIcon;
  }

  updatetime() {
    const data = new Date();
    const time = data.toLocaleTimeString('pt-br', { timeZone: 'UTC' });
    this.timeStamp = 'Today, ' + time;
  }
}
