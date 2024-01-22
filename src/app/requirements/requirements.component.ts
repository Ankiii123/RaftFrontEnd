import { Component } from '@angular/core';
import { Requirement } from '../interfaces/Requirement';
import { RequirementService } from '../services/requirement.service';
import { Account } from '../interfaces/Account';


@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.scss',
  
})
export class RequirementsComponent {
  requirements: Requirement[] = [];
  accounts : Account[] = [];
  

  constructor(private requirementService : RequirementService){}



  ngOnInit(): void {
    this.fetchRequirements();
  }

  private fetchRequirements(): void {
    this.requirementService.getAllRequirements().subscribe((data) => {
    
      this.requirements = data;
      console.log(this.requirements);
    });
    
  }

  onRowUpdating(event: any) {
    const updatedRequirement: Requirement = event.data;
    const rowIndex: number = event.index;
  
    // Check if 'account' property is defined
    if (updatedRequirement.account && updatedRequirement.account.name) {
      const matchingAccount = this.accounts.find(
        (account) => account.name === updatedRequirement.account.name
      );
  
      if (!matchingAccount) {
        // Display a pop-up or notification that no account of that name was found
        alert('No account with the specified name found.');
      } else {
        // Update the requirement with the account ID
        updatedRequirement.account.id = matchingAccount.id;
  
        // Use the service to update the requirement in the backend
        this.requirementService.updateRequirement(matchingAccount.id, updatedRequirement).subscribe(
          (response) => {
            console.log('Requirement updated successfully', response);
            this.requirements[rowIndex] = response;
          },
          (error) => {
            console.error('Error updating requirement:', error);
          }
        );
      }
    } else {
      // Handle the case when 'account' property is undefined or has missing properties
      console.error('Invalid account data:', updatedRequirement.account);
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

  


