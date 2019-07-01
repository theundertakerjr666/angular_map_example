import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidingListComponent } from './riding-list.component';

describe('RidingListComponent', () => {
  let component: RidingListComponent;
  let fixture: ComponentFixture<RidingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
