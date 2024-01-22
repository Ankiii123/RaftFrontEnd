import { Component } from '@angular/core';
import { Submission } from '../interfaces/Submission';
import { SubmissionService } from '../services/submission.service';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {
  submissions:Submission[] = [];

  constructor(private submissionService : SubmissionService){};

  ngOnInit(){
    this.fetchSubmission();
  }

  private fetchSubmission() : void{
     this.submissionService.getAllSubmissions().subscribe(
      data => this.submissions = data
     );
  }

  onRowUpdating(event: any): void {
    
  }

  onRowInserting(event: any): void {
    const newData = event.data; 

    this.submissionService.createSubmission(newData).subscribe(
      createdSubmission => {
        console.log('Submission created:', createdSubmission);
        this.fetchSubmission(); 
      },
      error => console.error('Error creating submission', error)
    );
    
  }

  onRowRemoving(event: any): void {
    // Handle row removing logic
    console.log('Row removing event:', event);
  }



}
