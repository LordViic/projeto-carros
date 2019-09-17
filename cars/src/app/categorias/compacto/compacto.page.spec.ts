import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactoPage } from './compacto.page';

describe('CompactoPage', () => {
  let component: CompactoPage;
  let fixture: ComponentFixture<CompactoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
