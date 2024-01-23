import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequirementDialogComponentComponent } from './add-requirement-dialog-component.component';

describe('AddRequirementDialogComponentComponent', () => {
  let component: AddRequirementDialogComponentComponent;
  let fixture: ComponentFixture<AddRequirementDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRequirementDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRequirementDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
