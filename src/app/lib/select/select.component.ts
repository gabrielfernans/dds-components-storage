import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DdsComponent } from "../helpers/dds.component";

@Component({
  selector: `dds-select`,
  templateUrl: `./select.component.html`,
  styleUrls: [`./select.component.scss`]
})
export class SelectComponent extends DdsComponent {
  @Input() selectOptions!: Array<string>;
  @Input() label: string = ``;
  @Input() defaultValue: string = ``;
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();
  private selectedValue: string = ``;
  public indexSelected: number = -1;

  override ngOnInit() {
    super.ngOnInit();
    this.ddsInitializer = `Select`;
  }

  public onChange() {
    this.selectedValue = this.ddsElement.querySelector(`select`).value;
    this.indexSelected = this.selectOptions.indexOf(this.selectedValue);
    console.log(this.indexSelected)
    this.optionSelected.emit(this.selectedValue);
  }

}
