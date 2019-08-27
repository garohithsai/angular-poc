import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Controller } from '../rest-services-config/controller-mapping';
import { Constants } from '../constants/constants';
import { ControllerServiceMappping } from '../rest-services-config/controller-services-mapping';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class CommonService {

    linkedForms;
    deletedLinkedForms;
    searchFormData;
    selection;

    constructor(private restService: RestService) {
    }
    public data: any;
    public userRole: any;

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
    loadRoleData(role): Observable<any> {
        if (role === 'admin') {
            this.data = {
                userRole : 'admin'
            };
        } else {
            this.data = {
                userRole : 'user'
            };
        }
        sessionStorage.setItem('userRole', this.data.userRole);
        return of(this.data);
    }
}
