import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ILogin, IUser } from '../models/auth.model';
import { apiEndpoint } from '../constants/constants';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  onLogin(data: ILogin) {
    return this.http
      .post<IUser>(`${apiEndpoint.AuthEndpoint.login}`, data, {observe: 'response'})
      .pipe(
        map((response) => {
          if (response) {
            this.tokenService.setToken(response.body?.id!);
          }
          return response;
        })
      );
  }

  onLogout() {
    this.http.post(`${apiEndpoint.AuthEndpoint.logout}`, '').subscribe({
      next: (response) => {
        this.tokenService.removeToken();
      },
    });
  }
}