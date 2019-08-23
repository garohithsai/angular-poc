import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { StructuredFormControl, Validations, FormControlTypes } from './interface/structured-form';
import * as _ from 'underscore';
@Injectable()
export class FormBuilderService {

    constructor(private formBuilder: FormBuilder) {

    }
    buildForm(structuredFormControls: StructuredFormControl[]): FormGroup {
      const form = this.formBuilder.group({});
      _.forEach(structuredFormControls, (structuredFormControl: StructuredFormControl) => {
        form.addControl(structuredFormControl.name, new FormControl(structuredFormControl.defaultValue,
          this.buildValidators(structuredFormControl)));
      });
      return form;
    }

    buildValidators(structuredFormControl: StructuredFormControl): ValidatorFn[] {
        const validators = [];
        _.forEach(Object.keys(structuredFormControl.validations), (validationProperty: string) => {
            this.pushValidators(validators, validationProperty,
               structuredFormControl.validations, structuredFormControl.type);
        });
        return validators as ValidatorFn[];
    }

    pushValidators(validators, validationProperty , validations, formControlType) {
      switch (validationProperty) {
         case 'required':
            validators.push(formControlType === FormControlTypes.Checkbox ? Validators.requiredTrue : Validators.required);
            break;
         case 'minLength':
            validators.push(Validators.minLength(validations.minLength));
            break;
         case 'maxLength':
            validators.push(Validators.maxLength(validations.maxLength));
            break;
         case 'emailValidate':
            validators.push(Validators.email);
            break;
         case 'pattern':
            validators.push(Validators.pattern(validations.pattern));
            break;
      }
    }
}
