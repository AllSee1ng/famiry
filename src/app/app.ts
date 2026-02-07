import { Component } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { PasswordInputComponent } from './shared/components/password-input/password-input.component';
import { LogoComponent } from './shared/components/logo/logo.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, InputComponent, PasswordInputComponent, LogoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
