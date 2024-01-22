import { Component } from '@angular/core';
import { Requirement } from '../interfaces/Requirement';
import { RequirementService } from '../services/requirement.service';
import { Account } from '../interfaces/Account';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.scss',
  
})
export class RequirementsComponent {
  requirements: Requirement[] = [];
  accounts : Account[] = [];
  

  constructor(private requirementService : RequirementService, private accountService : AccountService){}



  ngOnInit(): void {
    this.fetchRequirements();
    this.fetchAccounts();
    
  }

  private fetchRequirements(): void {
    this.requirementService.getAllRequirements().subscribe((data) => {
    
      this.requirements = data;
      console.log(this.requirements);
    });
    
  }

  private fetchAccounts(): void {
    this.accountService.getAllAccounts().subscribe((data) => {
      this.accounts = data;
      console.log(this.accounts);
    });
  }

  onRowUpdating(event: any) {
    const updatedRequirement: Requirement = event.data;
    const rowIndex: number = event.index;

    const matchingAccount = this.accounts.find(
      (account) => account.name === updatedRequirement.account.name
    );

    if (!matchingAccount) {
      // Display a pop-up or notification that no account of that name was found
      alert('No account with the specified name found.');
      console.log("nothing matching");
    } else {
      console.log(this.accounts)
      updatedRequirement.account.id = matchingAccount.id;
      this.requirementService.updateRequirement(event.data.id, updatedRequirement);
    }
  }


  onRowInserting(event: any) {
    const newData = event.data; 

   
    this.requirementService.createRequirement(newData).subscribe(
      (createdRequirement) => {
        console.log('Requirement inserted successfully:', createdRequirement);
       
      },
      (error) => {
        console.error('Error inserting requirement:', error);
       
      }
    );
  }

  onRowRemoving(event: any) {
    const requirementId = event.data.requirementId; 
   
      this.requirementService.deleteRequirement(requirementId).subscribe(
        () => {
          console.log('Requirement removed successfully');
          
        },
        (error) => {
          console.error('Error removing requirement:', error);
          
        }
      );
    
  }

}

  


