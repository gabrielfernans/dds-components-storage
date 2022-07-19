import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DdsComponent } from '../helpers/dds.component';
import { debounce, pascalDash, stringToBoolean } from '../helpers/dds.helpers';

@Component({
  selector: `dds-textinput`,
  templateUrl: `./textinput.component.html`,
  styleUrls: [`./textinput.component.scss`],
})
export class TextInputComponent extends DdsComponent implements OnChanges {
  @Output() onIconClick: EventEmitter<object> = new EventEmitter<object>();
  @Output() onKeyup: EventEmitter<object> = new EventEmitter<object>();
  @Input() type: string = `text`;
  @Input() value: string = ``;
  @Input() label: string = ``;
  @Input() placeholder: string = ``;
  @Input() helper: string = ``;
  @Input() feedback: string = ``;
  @Input() minlength: string = ``;
  @Input() maxlength: string = ``;
  @Input() button: string = ``;
  @Input() show: string = ``;
  @Input() icons: string = ``;
  @Input() iconStart: string = ``;
  @Input() iconClickable: any = `false`;
  @Input() disabled: any = `false`;
  @Input() required: any = `false`;
  @Input() optionalText: string = '';
  @Input() buttonIcon: any = ``
  public dataDds: string = ``;
  public iconList: Array<string> = [];
  public dataMask:string =  ``

  // @ts-ignore
  ngOnInit() {
    super.ngOnInit();
    this.iconClickable = stringToBoolean(this.iconClickable);
    this.disabled = stringToBoolean(this.disabled);
    this.required = stringToBoolean(this.required);
    switch (this.type.toLowerCase()) {
      case `password`:
        this.ddsInitializer = `InputPassword`;
        this.dataDds = pascalDash(this.ddsInitializer);
        break;
      case `tel`:
        this.ddsInitializer = `InputMask`;
        this.dataDds = pascalDash(this.ddsInitializer);
        this.dataMask = "(999) 999-9999"
        break;
    }
  }

  processIcons() {
    if (this.icons) {
      this.iconList = this.icons.replace(/ /g, ``).split(`,`);
    } else {
      this.iconList = [];
    }
  }

  handleIconClick(e: any) {
    if (this.iconClickable) {
      alert('click works!')
      this.onIconClick.emit({
        id: this.elementId,
        type: e.target.getAttribute(`data-type`),
        value: this.ddsElement.querySelector(`input`).value || undefined,
      });
    }
  }

  handleIconKeyup(e: any) {
    if (e.key === `Enter`) {
      this.handleIconClick(e);

    }
  }

  handleKeyupFinal(e: any) {
    if(e.key === 'Enter') {
      alert(this.ddsElement.querySelector('input').value)
      this.onKeyup.emit(
        this.ddsElement.querySelector(`input`).value || undefined
      );
      }
  }

  handleButtonClick(e:any) {
    alert(this.ddsElement.querySelector(`input`).value)
  }

  public handleKeyup = debounce((e: any) => this.handleKeyupFinal(e));

  applyCssError(field:any) {
    console.log(field)
  }

  ngOnChanges() {
    this.processIcons();
  }
}
