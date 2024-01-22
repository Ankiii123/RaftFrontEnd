import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    id: '123456',
    account: 'Standard',
    role: 'User'
  };
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
