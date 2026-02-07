import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { PasswordInputComponent } from '../../shared/components/password-input/password-input.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss'],
  imports: [ButtonComponent, InputComponent, PasswordInputComponent, LogoComponent],
})
export class LayoutComponent {}
