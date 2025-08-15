import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Nebular imports
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule,
  NbFormFieldModule,
  NbLayoutModule,
  NbCardModule,
  NbSpinnerModule,
  NbToastrModule
} from '@nebular/theme';

// Import standalone components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from './auth-layout.component';

// Add proper typing to routes
const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    // Empty - standalone components don't go here
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    
    // Nebular modules
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbCheckboxModule,
    NbAlertModule,
    NbSpinnerModule,
    
    // Import standalone components
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {}