import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  imports: [FormsModule],
})
export class InputComponent {
  @Input() type: 'text' | 'password' = 'text';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() iconUrl = '';
  @Input() value = '';
  @Output() controlValue: EventEmitter<string | null> = new EventEmitter<string | null>();

  onInput(value: string) {
    this.value = value;
    this.controlValue.emit(value);
  }
}
