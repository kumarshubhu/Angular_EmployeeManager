import { Login } from './../login';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  Credential: Login[];
  LoginGroup = new FormGroup({
    UserId: new FormControl('', Validators.required),
                            Password: new FormControl('',
                             [Validators.required,
                              Validators.minLength(4)])}) ;

       get UserId() { return this.LoginGroup.get('UserId'); }
       get Password() { return this.LoginGroup.get('Password'); }

  constructor(private credential: EmployeeService, private router: Router) { }

  ngOnInit() {
    let v=  document.getElementsByName('loginfmt');
    debugger;
    this.Credential = this.credential.Credentials;
  }

  PleaseSubmit() {
    alert(this.LoginGroup.value);
  }

  verifyUser(userid: string, password: string) {
    if ((userid === 'jurgen12345') && (password === '12345')) {
      sessionStorage.setItem('id', userid);
      this.router.navigate(['/Tables']);
      return 0;
    }
// tslint:disable-next-line: prefer-for-of
    for (let credentialIteration = 0; credentialIteration < this.Credential.length; credentialIteration++) {
      if ((userid !== this.Credential[credentialIteration].UserId)
       && (password !== this.Credential[credentialIteration].Password)) {
        this.router.navigate(['/Error']);
        return 0;
      } else if ((userid === this.Credential[credentialIteration].UserId)
       && (password === this.Credential[credentialIteration].Password)) {
        sessionStorage.setItem('username', userid);
        this.router.navigate(['/Entries']);
        return 0;
      }
    }
  }
}
