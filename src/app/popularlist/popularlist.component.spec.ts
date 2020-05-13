import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularlistComponent } from './popularlist.component';

describe('PopularlistComponent', () => {
  let component: PopularlistComponent;
  let fixture: ComponentFixture<PopularlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
