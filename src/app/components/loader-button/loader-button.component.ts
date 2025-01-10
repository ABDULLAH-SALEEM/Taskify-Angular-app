import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loader-button',
  imports: [CommonModule],
  templateUrl: './loader-button.component.html',
  styleUrl: './loader-button.component.scss',
})
export class LoaderButtonComponent {
  @Input() loading: boolean = false;
  @Input() btnTitle: string = 'Confirm';
  @Input() loadingTitle: string = 'Loading....';
  @Input() type?: string = undefined;

  @Output() confirm = new EventEmitter<void>();

  onButtonClick() {
    this.confirm.emit();
  }
}
