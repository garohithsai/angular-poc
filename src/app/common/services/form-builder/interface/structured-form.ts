
import { ValidatorFn } from '@angular/forms';

export interface StructuredFormControl {
    name: string;
    validations?: Validations;
    defaultValue?: string;
    type:  FormControlTypes;
}

export interface Validations {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    emailValidate?: boolean;
    pattern?: string;
    customValidators?: ValidatorFn[];
}

export enum FormControlTypes {
    INPUT = 'INPUT',
    SELECT = 'SELECT',
    CHECKBOX = 'CHECKBOX',
    RADIO = 'RADIO',
    TEXT_AREA = 'TEXT_AREA'
}
