import { StructuredFormControl, FormControlTypes } from 'src/app/common/services/form-builder/interface/structured-form';
export const FORM_SUMMARY_FORM_CONROLS: StructuredFormControl[] = [
        {
            name: 'description',
            defaultValue: '',
            type: FormControlTypes.TEXT_AREA,
            validations: { required: true }
        },
        {
            name: 'otherInformation',
            defaultValue: '',
            type: FormControlTypes.TEXT_AREA,
            validations: {}
        },
        {
            name:   'geoCategorization',
            defaultValue: '',
            type: FormControlTypes.RADIO,
            validations: {required: true}
        },
        {
            name:   'businessCategorization',
            defaultValue: '',
            type: FormControlTypes.RADIO,
            validations: {required: true}
        },
        {
            name:   'classCode',
            defaultValue: '',
            type: FormControlTypes.INPUT,
            validations: {}
        },
        {
            name:   'fillInType',
            defaultValue: '',
            type: FormControlTypes.RADIO,
            validations: {required: true}
        },
        {
            name:   'fillInStatus',
            defaultValue: '',
            type: FormControlTypes.RADIO,
            validations: {required: true}
        }
    ];
