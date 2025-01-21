import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <h2>Welcome to PathMatch Demo</h2>
      <p>This demo shows the difference between pathMatch: 'full' and pathMatch: 'prefix'</p>
      <ul class="list-disc ml-6 mt-4">
        <li>pathMatch: 'full' - The entire URL must match exactly</li>
        <li>pathMatch: 'prefix' - The URL can start with the specified path and continue with additional segments</li>
      </ul>
    </div>
  `
})
export class HomeComponent {}
