declare var google: any;
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class GoogleLoginService implements OnInit {
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '445428518684-ilb4mledrkucon84fq3ndui9ueklnmg0.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this),
    });
  }

  startGoogleSignIn() {
    console.log(google);
    google.accounts.id.prompt();
  }

  handleCredentialResponse(response: any) {
    const jwtToken = response.credential;
    console.log('Google JWT Token:', jwtToken);
  }
}

// import { Injectable } from '@angular/core';

// declare const google: any;

// @Injectable({
//   providedIn: 'root',
// })
// export class GoogleLoginService {
//   private clientId: string =
//     '445428518684-ilb4mledrkucon84fq3ndui9ueklnmg0.apps.googleusercontent.com';

//   constructor() {
//     this.loadGoogleLibrary().then(() => {
//       this.initializeGoogleSignIn();
//     });
//   }

//   private loadGoogleLibrary(): Promise<void> {
//     return new Promise((resolve) => {
//       const interval = setInterval(() => {
//         if (typeof google !== 'undefined' && google.accounts) {
//           clearInterval(interval);
//           resolve();
//         }
//       }, 100);
//     });
//   }

//   private initializeGoogleSignIn(): void {
//     google.accounts.id.initialize({
//       client_id: this.clientId,
//       callback: this.handleCredentialResponse.bind(this),
//       use_fedcm_for_prompt: false,
//     });
//   }

//   public startGoogleSignIn(): void {
//     console.log(google);
//     google.accounts.id.prompt();
//   }

//   private handleCredentialResponse(response: any): void {
//     const jwtToken = response.credential;
//     console.log('Google JWT Token:', jwtToken);
//     // Further processing of the JWT token
//   }
// }
