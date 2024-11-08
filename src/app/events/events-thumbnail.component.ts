import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div
      class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden"
    >
      <img
        class="w-32 h-32 rounded-full"
        [src]="event.image_url"
        alt="{{ event.name }}"
      />
      <div class="p-6">
        <h2 class="text-gray-800 font-bold mb-2">{{ event.name }}</h2>
        <p class="text-gray-600 mb-4">{{ event.description }}</p>
        <div class="flex justify-between items-center">
          <div>
            <p class="text-gray-700">
              <strong>Date:</strong> {{ event.date | date : 'fullDate' }}
            </p>
            <p class="text-red-500">
              <strong>Location:</strong> {{ event.location.address }},
              {{ event.location.city }}, {{ event.location.country }}
            </p>
          </div>
          <button
            class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            (click)="handleClickme()"
          >
            Click me!
          </button>
        </div>
      </div>
    </div>
  `,
})
export class EventsThumbnailComponent {
  @Input() event: any;
  props: string = 'Child Component';
  // Création de l'EventEmitter et déclaration de l'événement avec @Output
  @Output() eventClick = new EventEmitter();
  // Array of objects to randomly select from
  dataList = [
    { name: 'aimad', code: 'S135316719' },
    { name: 'mohamed', code: 'S135316720' },
    { name: 'sara', code: 'S135316721' },
    { name: 'yasmine', code: 'S135316722' },
    { name: 'mehdi', code: 'S135316723' },
  ];

  handleClickme() {
    // Pick a random object from the dataList
    const randomData =
      this.dataList[Math.floor(Math.random() * this.dataList.length)];
    // Emit the randomly selected data
    this.eventClick.emit(randomData);
  }
}
