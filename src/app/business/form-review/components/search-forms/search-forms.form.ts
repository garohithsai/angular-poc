import { StructuredFormControl, FormControlTypes } from 'src/app/common/services/form-builder/interface/structured-form';
export const SEARCH_FORM_CONTROLS: StructuredFormControl[] = [
    {
        name: 'lineOfBusiness',
        defaultValue: '',
        type: FormControlTypes.SELECT,
        validations: { required: true }
    },
    {
        name: 'categoryPart',
        defaultValue: '',
        type: FormControlTypes.SELECT,
        validations: {}
    },
    {
        name: 'state',
        defaultValue: '',
        type: FormControlTypes.SELECT,
        validations: { required: true }
    }
];
