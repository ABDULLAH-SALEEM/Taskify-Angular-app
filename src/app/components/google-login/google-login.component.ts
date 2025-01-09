declare var google: any;
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit, AfterViewInit {
  @ViewChild('loginParent') loginParent!: ElementRef;
  googleBtnWidth = 100;

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '445428518684-ilb4mledrkucon84fq3ndui9ueklnmg0.apps.googleusercontent.com',
      callback: (resp: any) => {
        console.log(resp);
      },
    });
  }

  ngAfterViewInit(): void {
    const parentWidth = this.loginParent.nativeElement.offsetWidth;
    this.googleBtnWidth = parentWidth;
    console.log(parentWidth);
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      size: 'large',
      width: this.googleBtnWidth - 80,
      logo_alignment: 'center',
    });
  }
}
