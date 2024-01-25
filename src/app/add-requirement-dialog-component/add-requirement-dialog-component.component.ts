import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Requirement } from '../interfaces/Requirement';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-requirement-dialog-component',
  templateUrl: './add-requirement-dialog-component.component.html',
  styleUrls: ['./add-requirement-dialog-component.component.scss'],
 
})
export class AddRequirementDialogComponent {
  newRequirementForm: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<AddRequirementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
    ) {
    this.newRequirementForm = this.formBuilder.group({
      requirementId: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      requiredNo: [null, Validators.required],
      jobDescription: [null, Validators.required],
      hiringManager: [null, Validators.required],
      accountName: [null, Validators.required],
    });

    // Set initial values if provided
    if (data.initialValues) {
      this.newRequirementForm.patchValue(data.initialValues);
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.newRequirementForm.valid) {
      const formValue = this.newRequirementForm.value;
      console.log(formValue.startDate);
      this.dialogRef.close(formValue);
    } else {
      console.error('Validation failed. Please fill in all required fields.');
    }
  }

  
}
