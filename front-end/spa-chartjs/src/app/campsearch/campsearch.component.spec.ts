import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampsearchComponent } from './campsearch.component';

describe('CampsearchComponent', () => {
  let component: CampsearchComponent;
  let fixture: ComponentFixture<CampsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
