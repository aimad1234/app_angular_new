import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <app-header></app-header>
    <!-- Insert the header component here -->

    <!-- <header class="bg-white-500 text-white p-4">
      <h2 class="text-3xl font-semibold text-gray-500 text-center">
        Parent Composant
      </h2>
      <hr /> -->
    <!-- <h3 class="text-3xl font-semibold text-gray-500 text-center">
        {{ thumbnail.props }}
      </h3> -->
    <event-thumbnail
      [event]="event1"
      #thumbnail
      (eventClick)="handleEventClicked($event)"
    ></event-thumbnail>
    <div *ngIf="receivedData" class="mt-4 p-4 bg-gray-100 rounded shadow">
      <h3 class="text-xl font-bold text-gray-700 mb-3">Event Data Received:</h3>

      <table
        class="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm"
      >
        <thead>
          <tr class="bg-gray-200">
            <th
              class="py-2 px-4 border-b border-gray-300 text-gray-700 font-semibold"
            >
              Field
            </th>
            <th
              class="py-2 px-4 border-b border-gray-300 text-gray-700 font-semibold"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-gray-300 text-gray-600">
              Name
            </td>
            <td class="py-2 px-4 border-b border-gray-300 text-gray-700">
              {{ receivedData.name }}
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-gray-300 text-gray-600">
              Code
            </td>
            <td class="py-2 px-4 border-b border-gray-300 text-gray-700">
              {{ receivedData.code }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <get-list></get-list>
    <!-- </header> -->
  `,
})
export class EventsListComponent {
  title = 'Event List Component';
  // Property to store the received data
  receivedData: { name: string; code: string } | null = null;
  event1 = {
    id: 1,
    name: 'Angular Workshop',
    date: new Date(2024, 11, 15), // December 15, 2024
    location: {
      address: '123 Angular Lane',
      city: 'Techville',
      country: 'Online',
    },
    image_url: './assets/angular-logo.png',
    description: 'A workshop on Angular best practices and new features.',
  };
  handleEventClicked(data: any) {
    console.log('Event data received:', data);
    // Store the received data to display in the template
    this.receivedData = data;
  }
}
