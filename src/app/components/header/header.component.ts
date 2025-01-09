import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IMAGES } from '../../assets/images';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logo: string = IMAGES.LOGO;
  constructor(private router: Router) {}
  title = signal('Taskify');

  logout(): void {
    // Perform logout logic here
    console.log('User logged out');
    this.router.navigate(['/']);
  }
}
