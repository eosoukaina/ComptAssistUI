// src/app/shared/nebular.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbCheckboxModule,
    NbAlertModule,
    NbLayoutModule,
    NbThemeModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const NEBULAR_MODULES = [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbCheckboxModule,
    NbAlertModule,
    NbLayoutModule,
    NbEvaIconsModule
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ...NEBULAR_MODULES
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        ...NEBULAR_MODULES
    ]
})
export class NebularModule { }