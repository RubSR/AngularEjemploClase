import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWithDataComponent } from './dialog-with-data.component';

describe('DialogWithDataComponent', () => {
  let component: DialogWithDataComponent;
  let fixture: ComponentFixture<DialogWithDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogWithDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWithDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
