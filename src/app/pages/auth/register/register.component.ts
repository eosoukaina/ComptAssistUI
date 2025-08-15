// src/app/pages/auth/register/register.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// Nebular modules
import {
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAlertModule,
    NbIconModule,
    NbFormFieldModule,
    NbLayoutModule,
    NbSpinnerModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        NbAlertModule,
        NbIconModule,
        NbFormFieldModule,
        NbLayoutModule,
        NbSpinnerModule,
        NbEvaIconsModule
    ]
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    isLoading = false;
    showPassword = false;
    showConfirmPassword = false;
    registerError: string | null = null;

    passwordStrength = {
        score: 0,
        colorClass: '',
        textClass: '',
        text: '',
        show: false
    };

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
        this.registerForm = this.fb.group({
            companyName: ['', [Validators.required]],
            legalRepresentative: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required]],
            acceptTerms: [false, [Validators.requiredTrue]]
        });
    }

    ngOnInit(): void {
        // Password value changes subscription
        this.registerForm.get('password')?.valueChanges.subscribe(() => {
            this.checkPasswordStrength();
        });
    }

    getFieldStatus(field: string): string {
        const control = this.registerForm.get(field);
        if (!control) return 'basic';
        return control.invalid && (control.dirty || control.touched) ? 'danger' : 'basic';
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    toggleConfirmPasswordVisibility() {
        this.showConfirmPassword = !this.showConfirmPassword;
    }

    checkPasswordStrength() {
        const password = this.registerForm.get('password')?.value || '';
        // Add your password strength logic here
        // This is a simplified example
        let score = 0;
        if (password.length >= 8) score++;
        if (password.match(/[a-z]+/)) score++;
        if (password.match(/[A-Z]+/)) score++;
        if (password.match(/[0-9]+/)) score++;
        if (password.match(/[!@#$%^&*(),.?":{}|<>]+/)) score++;

        this.passwordStrength = {
            score,
            colorClass: this.getPasswordStrengthColor(score),
            textClass: this.getPasswordStrengthTextClass(score),
            text: this.getPasswordStrengthText(score),
            show: password.length > 0
        };
    }

    private getPasswordStrengthColor(score: number): string {
        switch (score) {
            case 0:
            case 1:
                return 'danger';
            case 2:
                return 'warning';
            case 3:
            case 4:
                return 'success';
            default:
                return 'basic';
        }
    }

    private getPasswordStrengthText(score: number): string {
        switch (score) {
            case 0:
                return 'Very Weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Moderate';
            case 3:
                return 'Strong';
            case 4:
                return 'Very Strong';
            default:
                return '';
        }
    }

    private getPasswordStrengthTextClass(score: number): string {
        return `text-${this.getPasswordStrengthColor(score)}`;
    }

    onSubmit() {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }

        if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
            this.registerError = 'Passwords do not match';
            return;
        }

        this.isLoading = true;
        this.registerError = null;

        // Your registration logic here
        console.log('Form submitted', this.registerForm.value);

        // Simulate API call
        setTimeout(() => {
            this.isLoading = false;
            // Navigate to login or dashboard on success
            this.router.navigate(['/auth/login']);
        }, 2000);
    }
}