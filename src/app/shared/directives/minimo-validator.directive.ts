import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[minimoValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorDirective,
    multi: true
  }]
})
export class MinimoValidatorDirective implements Validator {

  @Input("valorMinimo") valorMinimo: string = "0";

  constructor() { }

  validate(c: FormControl) {
    let v: number = +c.value;

    if(isNaN(v)) {
      return{ 'minimo': true, 'requiredValue': 18 };
    }
    if(v < +this.valorMinimo) {
      return{ 'minimo': true, 'requiredValue': 18 };
    }
    return null;
  }

}
