import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'

@Component({
  selector: 'app-root',
  template: `
    <h3>App Component</h3>
    <login></login>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movya-client';
}
