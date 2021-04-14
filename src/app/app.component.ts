import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'

@Component({
  selector: 'app-root',
  template: `
    <home></home>
  `,
  styleUrls: ['./home/home.component.css']
})
export class AppComponent {
  title = 'movya-client';
}
