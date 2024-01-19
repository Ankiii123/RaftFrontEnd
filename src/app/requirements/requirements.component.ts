import { Component } from '@angular/core';
import { Requirement } from '../interfaces/Requirement';
import { RequirementService } from '../services/requirement.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.scss'
})
export class RequirementsComponent {
  requirements: Requirement[] = [];

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

   
    this.requirementService.updateRequirement(updatedRequirement.account.id, updatedRequirement).subscribe(
      (response) => {
        console.log('Requirement updated successfully', response);
        
        this.requirements[rowIndex] = response;
      },
      (error) => {
        console.error('Error updating requirement:', error);
       
      }
    );
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
    const requirementId = event.data.requirementId; // Adjust this based on your actual property name
   
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
