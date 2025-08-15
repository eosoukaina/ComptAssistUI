import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule
  ],
  template: `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Gérez vos factures simplement et efficacement</h1>
        <p class="hero-subtitle">
          Une solution complète pour la gestion de vos factures et paiements.
        </p>
        <div class="cta-buttons">
          <button nbButton status="primary" routerLink="/auth/login">S'identifier</button>
          <button nbButton status="warning" routerLink="/auth/register">Créez votre compte</button>
        </div>
      </div>
    </section>

    <!-- Software Description -->
    <section class="software-section">
      <div class="software-text">
        <h2>Une interface moderne et intuitive</h2>
        <p>
          Notre logiciel de facturation est conçu pour être facile à utiliser,
          tout en offrant des fonctionnalités puissantes.
        </p>
      </div>
      <div class="software-image">
        <img src="assets/software-screenshot.png" alt="Software Screenshot" class="software-screenshot">
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      padding: 4rem 2rem;
      text-align: center;
      background: #f8f9fa;
    }
    
    .hero-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: #6c757d;
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    
    .software-section {
      display: flex;
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
      gap: 2rem;
      align-items: center;
    }
    
    .software-text {
      flex: 1;
    }
    
    .software-image {
      flex: 1;
      text-align: center;
    }
    
    .software-screenshot {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class HomeComponent {}