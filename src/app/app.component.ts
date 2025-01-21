import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="container mx-4 my-4">
      <h1>PathMatch Demo</h1>
      
      <nav class="my-4">
        <a class="mr-4 text-blue-600 hover:underline" routerLink="/">Home </a>
        <a class="mr-4 text-blue-600 hover:underline" routerLink="/full">Full Match </a>
        <a class="mr-4 text-blue-600 hover:underline" routerLink="/full/extra">Full Match with Extra </a>
        <a class="mr-4 text-blue-600 hover:underline" routerLink="/prefix">Prefix Match </a>
        <a class="text-blue-600 hover:underline" routerLink="/prefix/child">Prefix Child </a>
      </nav>

      <div class="border p-4 rounded-lg">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'angular-pathmatch-demo';
}
