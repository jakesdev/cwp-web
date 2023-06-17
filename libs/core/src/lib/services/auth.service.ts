/**
 * Based on
 * https://github.com/cornflourblue/angular-7-jwt-authentication-example
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiService } from '.';
import { TokenModel } from '../model/response-model/token.model';
import { UserProfileModel } from '../model/response-model/user.model';

export interface ApplicationUser {
  token: TokenModel;
  user: UserProfileModel;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$: Observable<UserProfileModel> = this.apiServices.get<UserProfileModel>('auth/user');
  currentUserSubject: BehaviorSubject<ApplicationUser>;
  public currentUser: Observable<ApplicationUser>;

  constructor(
    private apiServices: ApiService,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<ApplicationUser>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): ApplicationUser {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.apiServices.post<any>('auth/login', { email, password }, false).pipe(map((auth) => {
      if (auth.data) {
        localStorage.setItem('currentUser', JSON.stringify(auth.data));
        localStorage.setItem('token', auth.data.token.accessToken);
        localStorage.setItem('refreshToken', auth.data.token.refreshToken);
        this.currentUserSubject.next(auth.data);
        return auth.data;
      }
    })
    );
  }


  onboarding(url: string) {
    return this.apiServices.update<any>('users/finish-tutorial', { url }, false).pipe(map((auth) => {
      if (auth.data) {
        this.currentUserValue.user = auth.data;
        this.currentUserSubject.next(this.currentUserValue);
        localStorage.setItem('currentUser', JSON.stringify(this.currentUserValue));
        return auth.data;
      }
    }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    const userEmpty: ApplicationUser = {
      token: {
        accessToken: '',
        refreshToken: '',
        expiresIn: 0,
      },
      user: {
        email: '',
        role: '',
        isFinishedTutorial: false,
        url: '',
        avatarUrl: '',
      }
    };
    this.currentUserSubject.next(userEmpty);
  }

  refreshToken() {
    return this.apiServices.post<any>(`auth/refresh-token`, null, true)
      .pipe(map((auth) => {
        if (auth.data) {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          const refreshUser: ApplicationUser = {
            token: {
              accessToken: auth.data.accessToken,
              refreshToken: auth.data.refreshToken,
              expiresIn: 3600,
            },
            user: {
              email: this.currentUserValue.user?.email!,
              role: this.currentUserValue.user?.role!,
              isFinishedTutorial: this.currentUserValue.user?.isFinishedTutorial!,
              url: this.currentUserValue.user?.url!,
              avatarUrl: this.currentUserValue.user?.avatarUrl!,
            }
          };
          localStorage.setItem('token', auth.data.accessToken);
          localStorage.setItem('refreshToken', auth.data.refreshToken);
          localStorage.setItem('currentUser', JSON.stringify(refreshUser));
          this.currentUserSubject.next(refreshUser);
          return auth.data.accessToken;
        }
      }));
  }

  getAccessTokenSilently() {
    return this.apiServices.get<any>(`auth/refresh-token`, true)
      .pipe(map((auth) => {
        if (auth.data) {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          const refreshUser: ApplicationUser = {
            token: {
              accessToken: auth.data.accessToken,
              refreshToken: auth.data.refreshToken,
              expiresIn: 3600,
            },
            user: {
              email: this.currentUserValue.user?.email!,
              role: this.currentUserValue.user?.role!,
              isFinishedTutorial: this.currentUserValue.user?.isFinishedTutorial!,
              url: this.currentUserValue.user?.url!,
              avatarUrl: this.currentUserValue.user?.avatarUrl!,
            }
          };
          localStorage.setItem('token', auth.data.accessToken);
          localStorage.setItem('refreshToken', auth.data.refreshToken);
          localStorage.setItem('currentUser', JSON.stringify(refreshUser));
          this.currentUserSubject.next(refreshUser);
          return auth.data.accessToken;
        }
      }));
  }

  signUp(email: string, password: string) {
    return this.apiServices.post<any>('auth/register', { email, password }, true).pipe(map((auth) => {
      if (auth.data) {
        localStorage.setItem('currentUser', JSON.stringify(auth.data));
        // localStorage.setItem('token', auth.data.token.accessToken);
        // localStorage.setItem('refreshToken', auth.data.token.refreshToken);
        this.currentUserSubject.next(auth.data);
        return auth.data;
      }
    })
    );
  }

  forgotPassword(email: string) {
    return this.apiServices.post<any>('auth/forgot-password', { email }, false).pipe(map((auth) => {
      if (auth.data) {
        return auth.data;
      }
      return null;
    })
    );
  }

  me() {
    return this.apiServices.get<any>('users/me', true).pipe(map((auth) => {
      if (auth.data) {
        this.currentUserValue.user = auth.data;
        this.currentUserSubject.next(this.currentUserValue);
        localStorage.setItem('currentUser', JSON.stringify(this.currentUserValue));
        return auth.data;
      }
      return null;
    })
    );
  }

  updateProfile(data: any) {
    return this.apiServices.update<any>('users/profile', data, true).pipe(map((res) => {
      if (res) {
        this.currentUserValue.user = res.data;
        this.currentUserSubject.next(this.currentUserValue);
        localStorage.setItem('currentUser', JSON.stringify(this.currentUserValue));
        return res.data;
      }
      return null;
    })
    );
  }
}
