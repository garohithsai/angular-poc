import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { commonService } from '../services/common.service';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
    constructor(private commonService: commonService){}
    intercept(req: HttpRequest<any> ,next: HttpHandler ): Observable<HttpEvent<any>> {
        this.commonService.showLoader();
        return next.handle(req).pipe(
            finalize(() => {
                setTimeout(() => {
                    this.commonService.hideLoader()    
                }, 2000);
            })
        )
    }
}