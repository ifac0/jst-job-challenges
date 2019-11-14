import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclimaComponent } from './listclima.component';

describe('ListclimaComponent', () => {
  let component: ListclimaComponent;
  let fixture: ComponentFixture<ListclimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListclimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
