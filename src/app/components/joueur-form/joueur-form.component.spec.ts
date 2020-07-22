import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurFormComponent } from './joueur-form.component';

describe('JoueurFormComponent', () => {
  let component: JoueurFormComponent;
  let fixture: ComponentFixture<JoueurFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoueurFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
