import { Component, NgModule, OnInit } from '@angular/core';
import { BenchCandidate } from '../interfaces/Bench';
import { BenchService } from '../services/bench-candidate.service';
import { Skill } from '../interfaces/Skill';



@Component({
  selector: 'app-bench-candidates',
  templateUrl: './bench.component.html',
  styleUrls: ['./bench.component.scss'],
})
export class BenchCandidatesComponent implements OnInit {
  benchCandidates: BenchCandidate[] = [];
  

  constructor( private benchService : BenchService) {

  }

  ngOnInit(): void {
    this.fetchCandidates();
  }

   deleteCandidate(candidate :BenchCandidate): void {
    this.benchService.deleteCandidate(candidate.id).subscribe(() => {
      
      this.benchCandidates = this.benchCandidates.filter((c) => c.id !== candidate.id);
    });
  }
  
  onRowInserting(event: any): void {
    console.log("inserting");
    const newCandidate = event.data as BenchCandidate;
    this.benchService.addCandidate(newCandidate).subscribe(
      (response) => {
        console.log('Row added successfully:', response);
      },
      (error) => {
        console.error('Error adding row:', error);
      }
    );

  }
  
  
  
  onRowUpdating(event: any): void {
    console.log('Updating Data:', event.newData);
    console.log('Event Key:', event.key.id);
  
    // Check if event.key is defined and is a number
    if (event.key.id !== undefined && typeof event.key.id === 'number') {
      const updatedCandidate = event.newData as BenchCandidate; 
    
       // Use event.key as the ID
      this.benchService.updateCandidate(event.key.id, updatedCandidate).subscribe(
        (response) => {
          console.log('Row updated successfully:', response);
        },
        (error) => {
          console.error('Error updating row:', error);
        }
      );
    } else {
      console.error('ID is not a number or is undefined. Cannot update the row.');
    }
  }
  
  
  
  onRowRemoving(event: any): void {
    const candidateToDelete = event.data as BenchCandidate; // Assuming data is of type BenchCandidate
    // Use event.data.id as the ID
    this.benchService.deleteCandidate(candidateToDelete.id).subscribe(
      () => {
        console.log('Row deleted successfully.');
      },
      (error) => {
        console.error('Error deleting row:', error);
      }
    );
  }
  private fetchCandidates(): void {
    this.benchService.getAllBenchCandidates().subscribe((data) => {
      
      this.benchCandidates = data;
      console.log(this.benchCandidates);
    });
    
  }


}

