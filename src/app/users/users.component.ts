import { Component } from '@angular/core';
import { User } from '../interfaces/User';
import { Account } from '../interfaces/Account';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: User[] = [];
  accounts : Account[] = [];
  
  constructor(private userService : UserService, public dialog: MatDialog, private accountService: AccountService){}

  ngOnInit(): void {
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.userService.getAllUsers().subscribe((data) => {
    
      this.users = data;
        console.log(this.users);
        this.accountService.getAllAccounts().subscribe((accountsData) => {
          this.accounts = accountsData;
          console.log(this.accounts);
      });
    });
  }
   

  openAddRequirementDialog(): void {
  //   const dialogRef = this.dialog.open(AddRequirementDialogComponent, {
  //     width: '400px',
  //     data: {
  //       accountNames: this.accounts.map((account) => account.name),
  //       initialValues: {
  //         requirementId: null,
  //         startDate: '',
  //         endDate: '',
  //         requiredNo: null,
  //         job_description: '',
  //         hiring_manager: '',
  //         accountName: null,
  //       },
  //     },
  // });


  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
        
  //       const selectedAccount = this.accounts.find((account) => account.name === result.accountName);

  //       if (selectedAccount) {
          
  //         result.account = {
  //           id: selectedAccount.id,
           
            
  //         };

          
  //         delete result.accountName;
  //         console.log(result);
  //         this.requirementService.createRequirement(result).subscribe(
  //           (createdRequirement) => {
  //             console.log('Requirement inserted successfully:', createdRequirement);
              
  //           },
  //           (error) => {
  //             console.error('Error inserting requirement:', error);
  //           }
  //         );
  //       } else {
  //         console.error('Selected account not found');
  //       }
  //     }
  //   });
  }

  onRowUpdating(event: any) {
    // const updatedRequirement: Requirement = event.data;
    // const rowIndex: number = event.index;
  
    
    // if (updatedRequirement.account && updatedRequirement.account.name) {
    //   const matchingAccount = this.accounts.find(
    //     (account) => account.name === updatedRequirement.account.name
    //   );
  
    //   if (!matchingAccount) {
        
    //     alert('No account with the specified name found.');
    //   } else {
    //     // Update the requirement with the account ID
    //     updatedRequirement.account.id = matchingAccount.id;
  
    //     // Use the service to update the requirement in the backend
    //     this.requirementService.updateRequirement(matchingAccount.id, updatedRequirement).subscribe(
    //       (response) => {
    //         console.log('Requirement updated successfully', response);
    //         this.requirements[rowIndex] = response;
    //       },
    //       (error) => {
    //         console.error('Error updating requirement:', error);
    //       }
    //     );
    //   }
    // } else {
    //   // Handle the case when 'account' property is undefined or has missing properties
    //   console.error('Invalid account data:', updatedRequirement.account);
    // }
  }
  

  onRowInserting(event: any) {
    // const newData = event.data; 

   
    // this.requirementService.createRequirement(newData).subscribe(
    //   (createdRequirement) => {
    //     console.log('Requirement inserted successfully:', createdRequirement);
       
    //   },
    //   (error) => {
    //     console.error('Error inserting requirement:', error);
       
    //   }
    // );
  }

  onRowRemoving(event: any) {
    // const requirementId = event.data.requirementId; 
   
    //   this.requirementService.deleteRequirement(requirementId).subscribe(
    //     () => {
    //       console.log('Requirement removed successfully');
          
    //     },
    //     (error) => {
    //       console.error('Error removing requirement:', error);
          
    //     }
    //   );
  }
}
