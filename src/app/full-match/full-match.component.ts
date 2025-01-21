import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-match',
  standalone: true,
  template: `
    <div>
      <h2>Full Match Component</h2>
      <p>Current URL: {{ currentUrl }}</p>
      <p class="mt-4">
        With pathMatch: 'full', this component will only be shown when the URL exactly matches '/full'.
        Try accessing '/full/extra' - it won't match!
      </p>
    </div>
  `
})
export class FullMatchComponent {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }
}
