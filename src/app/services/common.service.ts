import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable() 
export class commonService {
    isHttpServiceLoading = new Subject<boolean>();
   
    showLoader() {
        this.isHttpServiceLoading.next(true);
    }
    
    hideLoader() {
        this.isHttpServiceLoading.next(false);
    }
}
