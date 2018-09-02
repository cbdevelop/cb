import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefCatPopupComponent } from './chef-cat-popup.component';

describe('ChefCatPopupComponent', () => {
  let component: ChefCatPopupComponent;
  let fixture: ComponentFixture<ChefCatPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefCatPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefCatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
