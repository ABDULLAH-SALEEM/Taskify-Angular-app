import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

// decorator
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div style="max-width: 2000px; margin: auto;">
      <app-header />
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: [],
})

// main component class
export class AppComponent {
  title = 'taskify';
}
