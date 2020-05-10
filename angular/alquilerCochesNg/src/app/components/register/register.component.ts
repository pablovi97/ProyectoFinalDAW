import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/core/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService: Auth, private _location: Location) { }

  ngOnInit(): void {
  }
  register(login: string, email: string, pass: string) {
    this._authService.register(login, email, pass).subscribe(
      data => {
        console.log(data);

        this._location.back();
      },
      error => console.log(error)
    );

  }
}
