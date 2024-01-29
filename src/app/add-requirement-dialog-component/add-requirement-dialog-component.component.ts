import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Requirement } from '../interfaces/Requirement';

import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


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
    private formBuilder: FormBuilder, // Inject the form builder
    private snackBar: MatSnackBar
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
    this.markFormControlsTouched(this.newRequirementForm);

    if (this.newRequirementForm.valid) {
      const formValue = this.newRequirementForm.value;
      console.log(formValue.startDate);
      this.dialogRef.close(formValue);
    } else {
      this.openSnackBar(`Validation failed. Please fill in all required fields`, false);
      console.error('Validation failed. Please fill in all required fields.');
    }
  }

  markFormControlsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      // You can add additional logic here if needed
    });
  }

  openSnackBar(message: string, success: boolean): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: [success ? 'snackbar-success-light' : 'snackbar-error-light']
    });
  } 
}
