import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { Role } from '../interfaces/Role';
import { accounts } from 'google-one-tap';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  auth_token: string = '';
 
  user: User = {
    name:'',  
    employeeId: 0,
    emailId: '',
    role: Role.DEFAULT,
    accounts: new Set()
}


  constructor(private authService: AuthService){
  }

  ngOnInit(): void {
    this.auth_token != localStorage.getItem("auth_token");
    // console.log(this.auth_token);
    this.authService.fetchUserRole("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmtpdC5nYWRod2FsQGFjY29saXRlZGlnaXRhbC5jb20iLCJpYXQiOjE3MDYwOTQ1MzcsImV4cCI6MTcwNjE4MDkzN30._-yoMCRWuFrOOUqrhr8HkZ7zbyCMOWVK9RzKuxAlLuQ").subscribe((data) => {
      console.log("hehe")
      this.user = data;
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      // Assuming you have a function to handle file uploads
      this.uploadProfilePicture(file);
    }
  }

  uploadProfilePicture(file: File): void {
    // Implement your logic to upload the file to the server (backend/Spring)
    // You can use Angular HttpClient to send the file to your server
    // Example: this.http.post('/api/upload-profile-picture', formData).subscribe(response => { /* Handle response */ });
  }
}
