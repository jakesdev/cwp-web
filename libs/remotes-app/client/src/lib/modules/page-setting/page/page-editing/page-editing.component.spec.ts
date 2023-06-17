import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditingComponent } from './page-editing.component';

describe('PageEditingComponent', () => {
  let component: PageEditingComponent;
  let fixture: ComponentFixture<PageEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageEditingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
