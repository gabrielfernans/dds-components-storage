import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { DdsComponent } from '../helpers/dds.component';
import { stringToBoolean } from '../helpers/dds.helpers';

@Component({
  selector: `dds-modal`,
  templateUrl: `./modal.component.html`,
  styleUrls: [`./modal.component.scss`],
})
export class ModalComponent extends DdsComponent {
  @ViewChild(`honeypot`) honeypot!: ElementRef<HTMLElement>;
  @ViewChild('triggerContainer') triggerContainer!: ElementRef<HTMLElement>;
  @Input() backdrop: any; // Allows close-on-backdrop; not Design-approved
  @Input('modal-title') modalTitle: string = ``;
  public focusableElements: string = `button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`;
  public firstFocusableElement: any = ``;
  public focusableContent: any = ``;
  public lastFocusableElement: any = ``;

  // @ts-ignore
  ngOnInit() {
    super.ngOnInit();
    this.backdrop = stringToBoolean(this.backdrop);
    this.ddsInitializer = `Modal`;
  }

  // @ts-ignore
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.firstFocusableElement = this.ddsElement.querySelectorAll(
      this.focusableElements
    )[0];
    this.focusableContent = this.ddsElement.querySelectorAll(
      this.focusableElements
    );
    this.lastFocusableElement =
      this.focusableContent[this.focusableContent.length - 1]; // get last element to be focused inside modal
    this.ddsElement.addEventListener(`click`, (e: any) => {
      if (this.backdrop && e.target.getAttribute(`role`) === `dialog`) {
        this.ddsComponent.close();
      }
    });
    this.ddsElement.addEventListener(`ddsModalOpenedEvent`, (e: any) => {
      this.firstFocusableElement.focus();
    });
    setTimeout(() => {
      this.isolateModal();
    });
  }

  isolateModal() {
    const self: any = this;
    document.addEventListener('keydown', function (e) {
      let isTabPressed = e.key === 'Tab';

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        // if shift key pressed for shift + tab combination
        if (document.activeElement === self.firstFocusableElement) {
          self.lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        // if tab key is pressed
        if (document.activeElement === self.lastFocusableElement) {
          self.firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    });
    this.firstFocusableElement.focus();
  }

  // close() {
  //   this.ddsComponent.close();
  // }

  open() {
    this.ddsComponent.open();
  }
}
