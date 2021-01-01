//IMports necessários para se criar um validador customizado com reactive forms
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function HoursValidator(control: AbstractControl): { [key: string]: any } {

  //se retornar null é pq passou na validação
  return (Number.isInteger(control.value * 4)) ? null : { hours: true };
}
