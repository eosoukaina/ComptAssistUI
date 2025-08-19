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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}