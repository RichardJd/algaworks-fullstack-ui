import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { MoneyHttp } from './money-http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRevokeUrl: string;

  constructor(
    private http: MoneyHttp,
    private auth: AuthService
  ) {
    this.tokensRevokeUrl = `${environment.apiUrl}/tokens/revoke`;
  }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
      });
  }
}
