import { StructuredFormControl, FormControlTypes } from 'src/app/common/services/form-builder/interface/structured-form';

export class PersonalPageFormGroups {
    public static sampleForm: StructuredFormControl[] = [
        {
            name: 'role',
            defaultValue: '',
            type:  FormControlTypes.Input,
            validations: {required: true, maxLength: 20}
        },
        {
            name: 'pass',
            defaultValue: '',
            type:  FormControlTypes.Input,
            validations: {required: true}
        }
    ];
}
