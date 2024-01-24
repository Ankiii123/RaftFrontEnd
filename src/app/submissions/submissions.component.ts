import { Component } from '@angular/core';
import {Submission } from '../interfaces/Submission';
import { SubmissionService } from '../services/submission.service';
import { Requirement } from '../interfaces/Requirement';
import { BenchCandidate } from '../interfaces/Bench';
import { RequirementService } from '../services/requirement.service';
import { MatDialog } from '@angular/material/dialog';
import { BenchService } from '../services/bench-candidate.service';
import { AddSubmissionDialogComponent } from '../add-submission-dialog/add-submission-dialog.component';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {
  submissions:Submission[] = [];
  benchCandidates: BenchCandidate[] = [];
  requirements:Requirement[]=[];
  constructor(private submissionService: SubmissionService,private requirementService : RequirementService,private benchCandidateService: BenchService,public dialog: MatDialog){};
  
  ngOnInit(){
    this.fetchSubmission();
  }

  private fetchSubmission() : void{
     this.submissionService.getAllSubmissions().subscribe(
      (data) => {
              this.submissions = data;
              console.log("submissions in submissions"+this.submissions);
            this.benchCandidateService.getAllBenchCandidates().subscribe((benchData)=>{
              this.benchCandidates=benchData;
              console.log("bench candidates in submissions"+this.benchCandidates);
            });
            this.requirementService.getAllRequirements().subscribe((requirementData)=>{
              this.requirements=requirementData;
              console.log("Requirements in submissions"+this.requirements);
            });
                     });
  }


  openAddSubmissionDialog(): void {
    const dialogRef = this.dialog.open(AddSubmissionDialogComponent, {
      width: '400px',
      data: {
        benchCandidateNames: this.benchCandidates.map((bench) => bench.candidateName),
        requirementIds:this.requirements.map((req)=>req.requirementId),
        initialValues: {
          submissionId: null,
          submissionDate: '',
          feedback:'',
          submissionStatus:'',
          requirementId:'',
          benchCandidateName: null,
        },
      },
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        
        const selectedBenchCandidate = this.benchCandidates.find((benchCandidate) => benchCandidate.candidateName === result.candidateName);

        if (selectedBenchCandidate) {
          
          result.benchCandidate = {
            id: selectedBenchCandidate.id,
          };

          
          delete result.benchCandidateName;
          console.log(result);
          this.submissionService.createSubmission(result).subscribe(
            (createdSubmission) => {
              console.log('Submission inserted successfully:', createdSubmission);
              
            },
            (error) => {
              console.error('Error inserting submission:', error);
            }
          );
        } else {
          console.error('Selected bench candidate not found');
        }
      }
    });
  }

  onRowRemoving(event: any):void {
        const submissionId = event.data.submissionId; 
       
          this.submissionService.deleteSubmission(submissionId).subscribe(
            () => {
              console.log('Requirement removed successfully');
              
            },
            (error) => {
              console.error('Error removing requirement:', error);
              
            }
          );
        
      }
}




















