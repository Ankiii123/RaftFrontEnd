import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-bench-candidate-dialog',
  templateUrl: './add-bench-candidate-dialog.component.html',
  styleUrl: './add-bench-candidate-dialog.component.scss'
})
export class AddBenchCandidateDialogComponent {
  newBenchCandidate: any = {}; // Use the appropriate interface or model for type checking

  constructor(
    public dialogRef: MatDialogRef<AddBenchCandidateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    // Perform any validation or additional logic here before closing the dialog
    // You can access the entered data using this.newBenchCandidate
    this.dialogRef.close(this.newBenchCandidate);
  }
}
