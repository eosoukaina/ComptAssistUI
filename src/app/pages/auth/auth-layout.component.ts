import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, NbLayoutModule],
  template: `
    <nb-layout>
      <nb-layout-column class="auth-container">
        <div class="auth-content">
          <router-outlet></router-outlet>
        </div>
      </nb-layout-column>
    </nb-layout>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
    
    .auth-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f8f9fa;
      padding: 2rem;
    }
    
    .auth-content {
      width: 100%;
      max-width: 400px;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class AuthLayoutComponent {}
