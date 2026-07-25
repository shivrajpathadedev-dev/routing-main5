import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
userArr:Array<Iuser>=[]
  constructor(
    private _userservice:UserService,
    private _routes:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._userservice.fetchusersdata()
    .subscribe({
      next:data=>{
        this.userArr=data
        this._router.navigate(['/users',this.userArr[0].userId])
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
