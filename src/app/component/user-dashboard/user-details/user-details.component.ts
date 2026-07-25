import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/models/user';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
userDetails!:Iuser
userId!:string
  constructor(
    private _userservice:UserService,
    private _router:Router,
    private _routers:ActivatedRoute,
    private _matdialog:MatDialog
  ) { }

  ngOnInit(): void {
    this._routers.params.subscribe(param=>{
      this.userId=param['uid']
      this._userservice.fetchuserId(this.userId)
      .subscribe({
        next:data=>{
          this.userDetails=data
        },
        error:err=>{
          console.log(err);
          
        }
      })
    })
  }
  
  onRemoveUser() {
    let matconfig = new MatDialogConfig()
    matconfig.width = '450px',
      matconfig.disableClose = true,
      matconfig.data = `Are yo sure do you want to remove this user!`
    let config = this._matdialog.open(GetConfirmComponent, matconfig)
    config.afterClosed()
      .subscribe(params => {
        if (params) {
          this._userservice.removeuser(this.userId)
            .subscribe({
              next: () => {
                this._userservice.fetchusersdata();
                const user = this._userservice.UsersDetails;
                if (user.length > 0) {
                  this._router.navigate(['/users', user[0].userId]);
                } else {
                  this._router.navigate(['/users']);
                }
              }
            })
        }
      })
  }

}
