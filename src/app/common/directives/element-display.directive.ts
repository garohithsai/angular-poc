import { Directive, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRoleService } from '../services/user-role.service';

@Directive({
  selector: '[appElementDisplay]'
})
export class ElementDisplayDirective implements OnInit {

  constructor(private elementRef: ElementRef, private userRoleService: UserRoleService) {
    this.userObservable = this.userRoleService.userRole;
  }

  public userObservable: any;
  public currentUser: any;

  ngOnInit(): void {
    // this.userObservable.subscribe((user) => {
    //   this.currentUser = user;
    //   console.log(user);
    //   if (!this.authorized()) {
    //     this.elementRef.nativeElement.display = 'none';
    //   }
    // });
    if (this.userObservable && this.userObservable.userRole !== 'admin') {
      console.log(this.elementRef.nativeElement);
      this.elementRef.nativeElement.style.display = 'none';
    }
  }

  private authorized() {
    return true;
  }

}
