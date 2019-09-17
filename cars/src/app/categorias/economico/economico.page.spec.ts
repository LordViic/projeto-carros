import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoPage } from './economico.page';

describe('EconomicoPage', () => {
  let component: EconomicoPage;
  let fixture: ComponentFixture<EconomicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
