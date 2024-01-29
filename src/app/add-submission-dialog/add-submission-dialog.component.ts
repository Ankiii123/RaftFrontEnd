import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-submission-dialog',
  templateUrl: './add-submission-dialog.component.html',
  styleUrl: './add-submission-dialog.component.scss'
})
export class AddSubmissionDialogComponent {
  newSubmissionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddSubmissionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder, // Inject the form builder
    private snackBar: MatSnackBar
  ) {
    this.newSubmissionForm = this.formBuilder.group({
      submissionId: [null, Validators.required],
      submissionDate: [null, Validators.required],
      feedback: [null,Validators.required],
      submissionStatus:[null,Validators.required],
      requirementId:[null,Validators.required],
      benchCandidateName: [null, Validators.required],
    });

    // Set initial values if provided
    if (data.initialValues) {
      this.newSubmissionForm.patchValue(data.initialValues);
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.newSubmissionForm.valid) {
      const formValue = this.newSubmissionForm.value;
      this.dialogRef.close(formValue);
    } else {
      this.openSnackBar(`Validation failed. Please fill in all required fields`, false);
      // Handle validation error
      console.error('Validation failed. Please fill in all required fields.');
    }
  }

  openSnackBar(message: string, success: boolean): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: [success ? 'snackbar-success-light' : 'snackbar-error-light']
    });
  }
}
