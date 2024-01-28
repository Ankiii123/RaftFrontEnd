import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-fulfillment-dialog',
  templateUrl: './add-fulfillment-dialog.component.html',
  styleUrl: './add-fulfillment-dialog.component.scss'
})
export class AddFulfillmentDialogComponent {

  newFulfillmentForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<AddFulfillmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.newFulfillmentForm = this.formBuilder.group({
      fulfillmentId: [null, Validators.required],
      fulfillmentDate: [null, Validators.required],
      submission : [null, Validators.required],
      fulfillmentStatus: [null, Validators.required]
    });

    // Set initial values if provided
    if (data.initialValues) {
      this.newFulfillmentForm.patchValue(data.initialValues);
    }
   
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.newFulfillmentForm.valid) {
      const formValue = this.newFulfillmentForm.value;
      console.log(formValue);
      let fulfillmentDate = new Date(formValue.fulfillmentDate);
      let formattedDate = fulfillmentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      formValue.fulfillmentDate = formattedDate;

      this.dialogRef.close(formValue);
    } else {
      console.error('Validation failed. Please fill in all required fields.');
    }
  }
}
