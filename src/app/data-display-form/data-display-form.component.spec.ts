import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayFormComponent } from './data-display-form.component';

describe('DataDisplayFormComponent', () => {
  let component: DataDisplayFormComponent;
  let fixture: ComponentFixture<DataDisplayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDisplayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
