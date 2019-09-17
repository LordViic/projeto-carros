import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitarioPage } from './utilitario.page';

describe('UtilitarioPage', () => {
  let component: UtilitarioPage;
  let fixture: ComponentFixture<UtilitarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
