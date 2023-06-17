import { Component, OnInit } from '@angular/core';
import { environment } from '@cwp/core/endpoint';
import { UserProfileModel } from '@cwp/core/model/response';
import { AuthService, LoaderService } from '@cwp/core/services';
import { finalize } from 'rxjs';

interface Font {
  name: string;
  sampleText: string;
}

@Component({
  selector: 'cwp-client-account-user-information-page',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationPageComponent implements OnInit {

  userProfile!: UserProfileModel | null;

  webView = environment.webView;

  userUrl!: string;

  fileLogo: any;

  imageUrl: any = '';

  fonts: Font[] = [
    { name: 'Font 1', sampleText: 'This is a sample text in Font 1' },
    { name: 'Font 2', sampleText: 'This is a sample text in Font 2' },
    { name: 'Font 3', sampleText: 'This is a sample text in Font 3' },
    { name: 'Font 4', sampleText: 'This is a sample text in Font 4' },
    { name: 'Font 5', sampleText: 'This is a sample text in Font 5' }
  ];

  constructor(
    private authService: AuthService,

    private loaderService: LoaderService,
  ) {
  }
  ngOnInit(): void {
    this.authService.me().subscribe((res) => {
      this.userProfile = res;
      this.userUrl = res.url;
    }
    );
  }

  selectFont(font: Font) {
    // Logic to handle font selection
  }

  uploadFile($event: any) {
    this.fileLogo = $event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileLogo);
  }

  handleFileInput(e: any) {
    this.fileLogo = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileLogo);
  }

  save() {
    this.loaderService.loading$.next(true);
    const formData = new FormData();
    formData.append('file', this.fileLogo);
    formData.append('url', this.userUrl);
    this.authService.updateProfile(formData).pipe(
      finalize(() => {
        this.loaderService.loading$.next(false);
      }
      )
    ).subscribe((res: any) => {
      if (res) {
        this.userProfile = res.data;
      }
    }
    );
  }
}
