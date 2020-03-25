import { Component, OnInit} from '@angular/core';
import { Auth } from '../../core/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: Auth) { }


  ngOnInit(): void {
  }

 loginUserPass(user: string, pass: string): void {
 this._authService.login(user ,pass)
 .subscribe(
   data => {console.log(data);},
   error =>console.log(error)
   );

 
    }



}