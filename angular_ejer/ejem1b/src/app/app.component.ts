import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  logging = '';

  login(user: string, pass: string) {
    if ((user === 'pablo') && (pass === 'pablo')) {
      this.logging = 'GREAT, you´re in!!!!!';
    } else {
      this.logging = 'OH SHIT, who are u!!!!!';
    }
  }
}
