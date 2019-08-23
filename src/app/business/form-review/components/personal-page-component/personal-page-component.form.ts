import { StructuredFormControl, FormControlTypes } from 'src/app/common/services/form-builder/interface/structured-form';

export class PersonalPageFormGroups {
    public static sampleForm: StructuredFormControl[] = [
        {
            name: 'fName',
            defaultValue: '',
            type:  FormControlTypes.Input,
            validations: {required: true, minLength: 10, maxLength: 20}
        },
        {
            name: 'dob',
            defaultValue: '',
            type:  FormControlTypes.Input,
            validations: {required: true}
        }
    ];
}
