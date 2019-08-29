export interface FormLinkageModel {
    number: number;
    name: string;
    editionDate: String;
    fillinStatus: string;
    fillingType: string;
    formCategory: string;
    guideline: string;
    complexLinkage: string;
    excluded?: boolean;
    // detailedColumn?: Array<any>;
}

export interface GuideLinesDashboardModel {
    formNumber: string;
    formName: string;
    coveragePart: string;
    lastEdited: string;
    updatedBy: string;
    status: string;
    icon?: string;
}
