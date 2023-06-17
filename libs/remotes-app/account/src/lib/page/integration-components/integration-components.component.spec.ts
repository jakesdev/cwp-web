import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationComponentsComponent } from './integration-components.component';

describe('IntegrationComponentsComponent', () => {
  let component: IntegrationComponentsComponent;
  let fixture: ComponentFixture<IntegrationComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrationComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntegrationComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
