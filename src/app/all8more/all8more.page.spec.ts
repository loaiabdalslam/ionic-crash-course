import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { All8morePage } from './all8more.page';

describe('All8morePage', () => {
  let component: All8morePage;
  let fixture: ComponentFixture<All8morePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ All8morePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(All8morePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
