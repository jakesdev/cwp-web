import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationComponentsPageComponent } from './integration-components.component';

describe('IntegrationComponentsPageComponent', () => {
  let component: IntegrationComponentsPageComponent;
  let fixture: ComponentFixture<IntegrationComponentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrationComponentsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntegrationComponentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
