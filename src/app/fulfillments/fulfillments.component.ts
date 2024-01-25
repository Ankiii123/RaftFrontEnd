// fulfillment.component.ts

import { Component, OnInit } from '@angular/core';
import { Fulfillment } from '../interfaces/Fulfillment';
import { Submission } from '../interfaces/Submission';
import { FulfillmentsService } from '../services/fulfillments.service';
import { SubmissionService } from '../services/submission.service';
import { BenchService } from '../services/bench-candidate.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFulfillmentDialogComponent } from '../add-fulfillment-dialog/add-fulfillment-dialog.component';
import { FulfillmentStatus } from '../interfaces/FulfillmentStatus';

@Component({
  selector: 'app-fulfillment',
  templateUrl: './fulfillments.component.html',
  styleUrls: ['./fulfillments.component.scss'] // Adjust the path based on your project structure
})
export class FulfillmentsComponent implements OnInit {
  fulfillments : Fulfillment[] = [];
  submissions : Submission[] = [];
 
  constructor(private fulfillmentService : FulfillmentsService, private submissionService : SubmissionService, private benchService : BenchService, public dialog: MatDialog){}
  ngOnInit(): void {
    this.fetchFulfillments();
  }

  private fetchFulfillments(): void {
    this.fulfillmentService.getAllFulfillments().subscribe((data) =>{
      this.fulfillments = data;
      console.log("Fulfillments : " + this.fulfillments);
      this.submissionService.getAllSubmissions().subscribe((submissionData) => {
      this.submissions = submissionData;
      console.log("Submission : " + this.submissions);

      })

  });
  }
// submission -> drop down , status  , date
  openAddFulfillmentDialog(): void {
    const dialogRef = this.dialog.open(AddFulfillmentDialogComponent, {
      width: '400px',
      data: {
       displaySubmissions : this.submissions.map((submission) => (
        `${submission.submissionId}`
       )),
        fulfillmentStatus : Object.keys(FulfillmentStatus), 
        initialValues: {
          fulfillmentId: null,
          fulfillmentDate: '',
          fulfillmentStatus: '',
          submissionString: ''
        },
      },
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      
        console.log(result.submission)
        const selectedSubmission = this.submissions.find((submission) => submission.submissionId == parseInt(result.submission));
        console.log(selectedSubmission)
        if (selectedSubmission) {
          result.submission = selectedSubmission;
          delete result.submissionString;
          console.log(result);
          this.fulfillmentService.createFulfillment(result).subscribe(
            (createdFulfillment) => {
              console.log('Fulfillment inserted successfully:', createdFulfillment);
              this.fetchFulfillments();
            },
            (error) => {
              console.error('Error inserting fulfillment:', error);
            }
          );
        } else {
          console.error('Selected submission not found');
        }
      }
    });
  }

    onEditingStart(event: any): void {
      // Open the edit dialog when editing starts
      const dialogRef = this.dialog.open(AddFulfillmentDialogComponent, {
          width: '400px',
          data: {
            displaySubmissions : this.submissions.map((submission) => (
             `${submission.submissionId}`
            )),
             fulfillmentStatus : Object.keys(FulfillmentStatus), 
             initialValues: {
               fulfillmentId: event.data.fulfillmentId,
               fulfillmentDate: event.data.fulfillmentDate,
               fulfillmentStatus: event.data.fulfillmentStatus,
               submissionString: event.data.submission
             },
           },
         });
         dialogRef.afterClosed().subscribe((result) => {
          if (result) {
          
            console.log(result.submission)
            const selectedSubmission = this.submissions.find((submission) => submission.submissionId == parseInt(result.submission));
            console.log(selectedSubmission)
            if (selectedSubmission) {
              result.submission = selectedSubmission;
              delete result.submissionString;
              console.log(result);
              this.fulfillmentService.updateFulfillment(result.fulfillmentId,result).subscribe(
                (updatedFulfillment) => {
                  console.log('Fulfillment inserted successfully:', updatedFulfillment);
                  this.fetchFulfillments();
                },
                (error) => {
                  console.error('Error inserting fulfillment:', error);
                }
              );
            } else {
              console.error('Selected submission not found');
            }
          }
        });
  }

}




// export class RequirementsComponent {
//   requirements: Requirement[] = [];
//   accounts : Account[] = [];
//   constructor(private requirementService : RequirementService ,public dialog: MatDialog,private accountService: AccountService,){}
//   ngOnInit(): void {
//     this.fetchRequirements();
//   }
//   private fetchRequirements(): void {
//     this.requirementService.getAllRequirements().subscribe((data) =>{
//       this.requirements = data;
//       console.log(this.requirements);
//       this.accountService.getAllAccounts().subscribe((accountsData) => {
//         this.accounts = accountsData;
//       console.log(this.accounts);
//     });
//   });
//   }
//   openAddRequirementDialog(): void {
//     const dialogRef = this.dialog.open(AddRequirementDialogComponent, {
//       width: '400px',
//       data: {
//         accountNames: this.accounts.map((account) => account.name),
//         initialValues: {
//           requirementId: null,
//           startDate: '',
//           endDate: '',
//           requiredNo: null,
//           jobDescription: '',
//           hiringManager: '',
//           accountName: null,
//         },
//       },
//     });
//     dialogRef.afterClosed().subscribe((result) => {
//       if (result) {
//         const selectedAccount = this.accounts.find((account) => account.name === result.accountName);
//         if (selectedAccount) {
//           result.account = selectedAccount;
//           delete result.accountName;
//           console.log(result);
//           this.requirementService.createRequirement(result).subscribe(
//             (createdRequirement) => {
//               console.log('Requirement inserted successfully:', createdRequirement);
//               this.fetchRequirements();
//             },
//             (error) => {
//               console.error('Error inserting requirement:', error);
//             }
//           );
//         } else {
//           console.error('Selected account not found');
//         }
//       }
//     });
//   }
//   onEditingStart(event: any): void {
//     // Open the edit dialog when editing starts
//     const dialogRef = this.dialog.open(AddRequirementDialogComponent, {
//         width: '400px',
//         data: {
//             accountNames: this.accounts.map((account) => account.name),
//             initialValues: {
//                 requirementId: event.data.requirementId,
//                 startDate: event.data.startDate,
//                 endDate: event.data.endDate,
//                 requiredNo: event.data.requiredNo,
//                 job_description: event.data.job_description,
//                 hiring_manager: event.data.hiring_manager,
//                 accountName: event.data.account.name,
//             },
//         },
//     });
//     dialogRef.afterClosed().subscribe((result) => {
//       if (result) {
//         const selectedAccount = this.accounts.find((account) => account.name === result.accountName);
//         if (selectedAccount) {
//           result.account = selectedAccount;
//           delete result.accountName;
//           console.log(result);
//           this.requirementService.updateRequirement(result.requirementId,result).subscribe(
//             (updatedRequirement) => {
//               console.log('Requirement updated successfully:', updatedRequirement);
//               this.fetchRequirements();
//             },
//             (error) => {
//               console.error('Error inserting requirement:', error);
//             }
//           );
//         } else {
//           console.error('Selected account not found');
//         }
//       }
//     });
// }
//   onRowUpdating(event: any) {
//     const updatedRequirement: Requirement = event.data;
//     const rowIndex: number = event.index;
  
    
//     if (updatedRequirement.account && updatedRequirement.account.name) {
//       const matchingAccount = this.accounts.find(
//         (account) => account.name === updatedRequirement.account.name
//       );
  
//       if (!matchingAccount) {
//         alert('No account with the specified name found.');
//       } else {
//         // Update the requirement with the account ID
//         updatedRequirement.account.account_id = matchingAccount.account_id;
  
//         // Use the service to update the requirement in the backend
//         this.requirementService.updateRequirement(matchingAccount.account_id, updatedRequirement).subscribe(
//           (response) => {
//             console.log('Requirement updated successfully', response);
//             this.requirements[rowIndex] = response;
//           },
//           (error) => {
//             console.error('Error updating requirement:', error);
//           }
//         );
//       }
//     } else {
//       // Handle the case when 'account' property is undefined or has missing properties
//       console.error('Invalid account data:', updatedRequirement.account);
//     }
//   }
//   onRowRemoving(event: any) {
//     const requirementId = event.data.requirementId;
//       this.requirementService.deleteRequirement(requirementId).subscribe(
//         () => {
//           console.log('Requirement removed successfully');
//           this.fetchRequirements();
//         },
//         (error) => {
//           console.error('Error removing requirement:', error);
//         }
//       );
//   }
// }
