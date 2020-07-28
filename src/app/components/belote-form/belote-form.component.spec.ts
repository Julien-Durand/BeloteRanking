import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeloteFormComponent } from './belote-form.component';

describe('BeloteFormComponent', () => {
  let component: BeloteFormComponent;
  let fixture: ComponentFixture<BeloteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeloteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeloteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
