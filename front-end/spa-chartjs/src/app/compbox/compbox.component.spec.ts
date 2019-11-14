import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompboxComponent } from './compbox.component';

describe('CompboxComponent', () => {
  let component: CompboxComponent;
  let fixture: ComponentFixture<CompboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
