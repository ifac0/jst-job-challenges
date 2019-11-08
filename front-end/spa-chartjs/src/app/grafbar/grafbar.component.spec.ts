import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafbarComponent } from './grafbar.component';

describe('GrafbarComponent', () => {
  let component: GrafbarComponent;
  let fixture: ComponentFixture<GrafbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
