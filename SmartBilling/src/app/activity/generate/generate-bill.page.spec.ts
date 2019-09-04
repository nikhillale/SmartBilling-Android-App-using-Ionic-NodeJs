import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBillPage } from './generate-bill.page';

describe('GenerateBillPage', () => {
  let component: GenerateBillPage;
  let fixture: ComponentFixture<GenerateBillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
