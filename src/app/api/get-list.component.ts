import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importer HttpClient

@Component({
  selector: 'get-list',
  template: `
    <div *ngIf="weatherData.current" class="p-4">
      <h2 class="text-xl font-semibold mb-4">
        Weather Data for Latitude: {{ latitude }}, Longitude: {{ longitude }}
      </h2>

      <!-- Données actuelles -->
      <h3 class="text-lg font-medium text-gray-800 mb-2">Current Weather</h3>
      <table
        class="min-w-full table-auto border-collapse border border-gray-300"
      >
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="px-4 py-2 border-b">Time</th>
            <th class="px-4 py-2 border-b">Temperature (°C)</th>
            <th class="px-4 py-2 border-b">Wind Speed (m/s)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2 border-b">{{ weatherData.current.time }}</td>
            <td class="px-4 py-2 border-b">
              {{ weatherData.current.temperature_2m }}°C
            </td>
            <td class="px-4 py-2 border-b">
              {{ weatherData.current.wind_speed_10m }} m/s
            </td>
          </tr>
        </tbody>
      </table>

      <div *ngIf="!weatherData.current">
        <p>Loading weather data...</p>
      </div>
    </div>
  `,
})
export class GetListComponent implements OnInit {
  weatherData: any = {}; // Pour stocker les données météo
  latitude: number = 52.52; // Latitude pour la requête API
  longitude: number = 13.41; // Longitude pour la requête API

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // URL de l'API Open-Meteo avec les paramètres latitude et longitude
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    // Appel à l'API pour récupérer les données météo
    this.http.get<any>(url).subscribe(
      (data) => {
        this.weatherData = data; // Sauvegarde des données récupérées
        console.log({ data });
      },
      (error) => {
        console.error('Erreur de récupération des données météo', error);
      }
    );
  }
}
