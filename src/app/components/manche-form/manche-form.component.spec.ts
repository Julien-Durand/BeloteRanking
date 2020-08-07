import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MancheFormComponent } from './manche-form.component';

describe('MancheFormComponent', () => {
  let component: MancheFormComponent;
  let fixture: ComponentFixture<MancheFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MancheFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MancheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
