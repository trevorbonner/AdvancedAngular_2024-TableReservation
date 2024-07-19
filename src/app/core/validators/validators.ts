import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function dateIsInPastValidator() : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const currentDate = new Date();
        const pickedDate = new Date(control.value)

        return currentDate > pickedDate? { 'invalidDate': true } : null;
    };
}