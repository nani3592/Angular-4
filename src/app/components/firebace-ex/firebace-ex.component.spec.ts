import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaceExComponent } from './firebace-ex.component';

describe('FirebaceExComponent', () => {
  let component: FirebaceExComponent;
  let fixture: ComponentFixture<FirebaceExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaceExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaceExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
