import { StructuredFormControl, FormControlTypes } from 'src/app/common/services/form-builder/interface/structured-form';

export class PersonalPageFormGroups {
    public static sampleForm: StructuredFormControl[] = [
        {
            name: 'role',
            defaultValue: '',
            type:  FormControlTypes.INPUT,
            validations: {required: true, minLength: 10, maxLength: 20}
        },
        {
            name: 'pass',
            defaultValue: '',
            type:  FormControlTypes.INPUT,
            validations: {required: true}
        }
    ];
}
