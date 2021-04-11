import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  template: `
    Username: <input type="text" [formControl] = "username">
  `
})
export class LoginPageComponent {

  username = new FormControl('');

}
