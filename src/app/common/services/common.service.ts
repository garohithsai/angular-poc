import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Controller } from '../rest-services-config/controller-mapping';
import { Constants } from '../constants/constants';
import { ControllerServiceMappping } from '../rest-services-config/controller-services-mapping';

@Injectable()
export class CommonService {

    linkedForms;
    deletedLinkedForms;
    searchFormData;
    selection;

    constructor(private restService: RestService) {
    }

    retrieveForm(body) {
        return this.restService.post(Controller.FORM_CONTROLLER,
             ControllerServiceMappping[Controller.FORM_CONTROLLER][Constants.RETRIEVE_FORM], body);
    }

    getLinkedForms() {
        return this.linkedForms;
    }

    setLinkedForms(data) {
        this.linkedForms = data;
    }

    setDeletedLinkedForms(data) {
        this.deletedLinkedForms = data;
    }

    getDeletedLinkedForms() {
        return this.deletedLinkedForms;
    }

    setSearchFormData(data) {
        this.searchFormData = data;
    }

    getSearchFormData() {
        return this.searchFormData;
    }

    setFormSearchSelectionData(data) {
        this.selection = data;
    }

    getFormSearchSelectionData() {
        return this.selection;
    }
}
