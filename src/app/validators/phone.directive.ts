import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { PhoneValidator } from './phone.validator';

@Directive({
  selector: '[phone][ngModel]',

  //definindo esta diretiva como parte da lista de validadores do Angular
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})

//Necessário implementar a interface Validator
export class PhoneDirective implements Validator {
  private validator = PhoneValidator();

  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }
}
