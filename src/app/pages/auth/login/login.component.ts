// src/app/pages/auth/login/login.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NbCardModule, NbButtonModule, NbInputModule, NbFormFieldModule,
    NbIconModule, NbCheckboxModule, NbAlertModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Subject, takeUntil } from 'rxjs';

// Uncomment and implement your auth service
// import { AuthService } from '../../../services/auth.service';

interface LoginResponse {
    token: string;
    user: {
        email: string;
        name: string;
    };
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        NbCardModule,
        NbButtonModule,
        NbInputModule,
        NbFormFieldModule,
        NbIconModule,
        NbCheckboxModule,
        NbAlertModule,
        NbSpinnerModule,
        NbEvaIconsModule
    ]
})
export class LoginComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    loginForm: FormGroup;
    isLoading = false;
    showPassword = false;
    loginError: string | null = null;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        // private authService: AuthService,
        // private toastrService: NbToastrService
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rememberMe: [false]
        });
    }

    ngOnInit(): void {
        // Check for saved credentials if "remember me" was checked
        const savedCredentials = localStorage.getItem('savedCredentials');
        if (savedCredentials) {
            const { email, password } = JSON.parse(savedCredentials);
            this.loginForm.patchValue({ email, password, rememberMe: true });
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    getFieldStatus(controlName: string): string {
        const control = this.loginForm.get(controlName);
        if (!control) return 'basic';
        return control.invalid && (control.dirty || control.touched) ? 'danger' : 'basic';
    }

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }

    onSubmit(): void {
        if (this.loginForm.invalid || this.isLoading) return;

        this.isLoading = true;
        this.loginError = null;

        const { email, password, rememberMe } = this.loginForm.value;

        // Save credentials if "remember me" is checked
        if (rememberMe) {
            localStorage.setItem('savedCredentials', JSON.stringify({ email, password }));
        } else {
            localStorage.removeItem('savedCredentials');
        }

        // Replace with your actual authentication logic
        // this.authService.login(email, password)
        //     .pipe(takeUntil(this.destroy$))
        //     .subscribe({
        //         next: (response: LoginResponse) => {
        //             // Handle successful login
        //             this.router.navigate(['/dashboard']);
        //         },
        //         error: (error) => {
        //             this.isLoading = false;
        //             this.loginError = error.message || 'An error occurred during login';
        //             this.toastrService.danger(this.loginError, 'Login Failed');
        //         }
        //     });

        // Simulate API call (remove this when implementing real auth)
        setTimeout(() => {
            this.isLoading = false;
            // For demo purposes, navigate to dashboard on any login
            this.router.navigate(['/dashboard']);
        }, 1500);
    }
}