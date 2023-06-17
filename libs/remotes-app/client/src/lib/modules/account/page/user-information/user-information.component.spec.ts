import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationPageComponent } from './user-information.component';

describe('UserInformationPageComponent', () => {
  let component: UserInformationPageComponent;
  let fixture: ComponentFixture<UserInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInformationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
