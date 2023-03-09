import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ValueService } from '../../services/value.service';

@Component({
  selector: 'app-number-base',
  templateUrl: './number-base.component.html',
  styleUrls: ['./number-base.component.scss']
})
export class NumberBaseComponent {
  decimal = new FormControl('0',
    [
      Validators.pattern(/^[0-9]+$/),
    ]
  );
  binary = new FormControl('0',
    [
      Validators.pattern(/^[0-1]+$/),
    ]
  );
  octal = new FormControl('0',
    [
      Validators.pattern(/^[0-7]+$/),
    ]
  );
  hexadecimal = new FormControl('0',
    [
      Validators.pattern(/^[0-9a-fA-F]+$/),
    ]
  );

  constructor(private valueService: ValueService) {
    valueService.valueObservable.subscribe(value => {
      if (Number.isNaN(value))
        value = 0;
      this.decimal.setValue(value.toString(10));
      this.binary.setValue(value.toString(2));
      this.octal.setValue(value.toString(8));
      this.hexadecimal.setValue(value.toString(16));
    });
  }

  changeDecValue() {
    this.valueService.setValue = parseInt(this.decimal.value? this.decimal.value : '0', 10);
  }

  changeBinValue() {
    this.valueService.setValue = parseInt(this.binary.value? this.binary.value : '0', 2);
  }

  changeOctValue() {
    this.valueService.setValue = parseInt(this.octal.value? this.octal.value : '0', 8);
  }

  changeHexValue() {
    this.valueService.setValue = parseInt(this.hexadecimal.value? this.hexadecimal.value : '0', 16);
  }
}
