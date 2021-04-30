import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensCreateComponent } from './vehicles-create.component';

describe('OrdensCreateComponent', () => {
  let component: OrdensCreateComponent;
  let fixture: ComponentFixture<OrdensCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdensCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
