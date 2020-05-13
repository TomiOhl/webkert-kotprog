import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentcommentsComponent } from './recentcomments.component';

describe('RecentcommentsComponent', () => {
  let component: RecentcommentsComponent;
  let fixture: ComponentFixture<RecentcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
