import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDeletePage } from './read-delete.page';

describe('ReadDeletePage', () => {
  let component: ReadDeletePage;
  let fixture: ComponentFixture<ReadDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadDeletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
