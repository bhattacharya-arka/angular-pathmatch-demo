import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prefix-match',
  standalone: true,
  template: `
    <div>
      <h2>Prefix Match Component</h2>
      <p>Current URL: {{ currentUrl }}</p>
      <p class="mt-4">
        With pathMatch: 'prefix', this component will be shown for both '/prefix' and '/prefix/child'.
        Any URL that starts with '/prefix' will match!
      </p>
    </div>
  `
})
export class PrefixMatchComponent {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }
}