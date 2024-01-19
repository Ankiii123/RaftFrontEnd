// fulfillment.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fulfillment',
  templateUrl: './fulfillments.component.html',
  styleUrls: ['./fulfillments.component.scss'] // Adjust the path based on your project structure
})
export class FulfillmentsComponent implements OnInit {
  fulfillments!: any[]; // Replace 'any' with the actual type of your fulfillments data

  constructor() { }

  ngOnInit(): void {
    // Fetch or initialize your fulfillments data and assign it to this.fulfillments
  }

  onRowUpdating(event: any) {
    // Handle row updating logic
  }

  onRowInserting(event: any) {
    // Handle row inserting logic
  }

  onRowRemoving(event: any) {
    // Handle row removing logic
  }
}
