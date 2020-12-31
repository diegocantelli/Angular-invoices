//Imports necessários para se criar um validador de formulário customizado

//Para usar esse validador, é necessário criar uma diretiva
import { AbstractControl, ValidatorFn } from '@angular/forms';

const expression = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;

//Deve ser exportada uma função que retorne o tipo ValidatorFn
export function PhoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const valid = expression.test(control.value) && control.value.length < 14;

    //Caso seja nulo, significa que o valor é válido, caso contrário, é inválido
    return valid ? null : { phone: true };
  };
}
