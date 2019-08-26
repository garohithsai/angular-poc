export class Constants  {
    public static SEARCH_FORM = 'SEARCH_FORM';
    public static RETRIEVE_FORM = 'RETRIEVE_FORM';
    public static CREATE_FORM = 'CREATE_FORM';
    public static UPDATE_FORM = 'UPDATE_FORM';
    public static LINKAGE_COL_NAMES = {
        'select': 'select',
        'name': 'Name',
        'number': 'Number',
        'editionDate': 'Edition Date',
        'fillinStatus': 'Fill in Status',
        'fillingType': 'Filling Type',
        'formCategory': 'Form Category',
        'guideline': 'Guideline',
        'complexLinkage': 'complex Linkage'
    };
    public static FORMSLINKAGE_TABLECOLUMNS_LIST = ['select', 'number', 'name', 'editionDate', 'fillinStatus',
    'fillingType', 'formCategory' , 'guideline', 'complexLinkage'];
}
