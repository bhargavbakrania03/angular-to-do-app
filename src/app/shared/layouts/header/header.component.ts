import { Component } from '@angular/core';
import { TokenService } from '../../../core/services/token.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAuthenticated$;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) {
    this.isAuthenticated$ = this.tokenService.isAuthentication;
  }

  onLogout() {
    this.authService.onLogout();
  }
}
