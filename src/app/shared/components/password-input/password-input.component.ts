import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export enum EPasswordInputIcons {
  Opened = 'icons/eye_opened.svg',
  Closed = 'icons/eye_closed.svg',
}
@Component({
  selector: 'app-password-input',
  templateUrl: 'password-input.component.html',
  styleUrls: ['password-input.component.scss'],
  imports: [FormsModule],
})
export class PasswordInputComponent {
  @Input() type: 'text' | 'password' = 'text';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() iconUrl = '';
  @Input() value = '';
  @Output() controlValue: EventEmitter<string | null> = new EventEmitter<string | null>();
  buttonIcon = EPasswordInputIcons.Closed;

  onInput(value: string) {
    this.value = value;
    this.controlValue.emit(value);
  }

  onButtonToggleClick(): void {
    if (this.type === 'password') {
      this.type = 'text';
      this.buttonIcon = EPasswordInputIcons.Opened;
    } else {
      this.type = 'password';
      this.buttonIcon = EPasswordInputIcons.Closed;
    }
  }
}
