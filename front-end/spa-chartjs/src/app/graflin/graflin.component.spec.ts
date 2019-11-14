import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraflinComponent } from './graflin.component';

describe('GraflinComponent', () => {
  let component: GraflinComponent;
  let fixture: ComponentFixture<GraflinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraflinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraflinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
