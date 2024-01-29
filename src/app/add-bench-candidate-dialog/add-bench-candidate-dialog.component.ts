import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the necessary form-related modules
import { BenchCandidateStatus } from '../interfaces/BenchCandidateStatus';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-bench-candidate-dialog',
  templateUrl: './add-bench-candidate-dialog.component.html',
  styleUrls: ['./add-bench-candidate-dialog.component.scss']
})
export class AddBenchCandidateDialogComponent {
  newBenchCandidateForm: FormGroup; // Declare a form group
  constructor(
    public dialogRef: MatDialogRef<AddBenchCandidateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder, // Inject the form builder
    private snackBar: MatSnackBar
  ) {
    this.newBenchCandidateForm = this.formBuilder.group({
      id:[null,Validators.required],
      candidateName:[null, Validators.required],
      candidateStatus:[null, Validators.required],
      startDate:[null,Validators.required],
      endDate:[null],
      benchCandidateSkills :[null,Validators.required],
      benchManagerName:[null, Validators.required],
    });
    if (data.initialValues) {
      console.log(data.initialValues)
      this.newBenchCandidateForm.patchValue(data.initialValues);
    }
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    if (this.newBenchCandidateForm.valid) {
      const formValue = this.newBenchCandidateForm.value;
      this.dialogRef.close(formValue);
    } else {
      this.openSnackBar(`Validation failed. Please fill in all required fields`, false);
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