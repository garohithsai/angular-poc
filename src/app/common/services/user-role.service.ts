import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor() {}
  public _userRole: any;

  setRole(userRole) {
      this._userRole = userRole;
  }
  get userRole() {
      return this._userRole;
  }
}
