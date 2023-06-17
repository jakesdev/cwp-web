import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPostComponent } from './trending-post.component';

describe('TrendingPostComponent', () => {
  let component: TrendingPostComponent;
  let fixture: ComponentFixture<TrendingPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingPostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
