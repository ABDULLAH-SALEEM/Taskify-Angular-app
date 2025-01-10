import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoaderButtonComponent } from '../loader-button/loader-button.component';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, LoaderButtonComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Modal Title';
  @Input() cancelButtonText: string = 'Cancel';
  @Input() confirmButtonText: string = 'Confirm';
  @Input() body: string = 'Are you sure you want to perform this action';
  @Input() hasChild: boolean = false;

  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  modalHidden = true;
  animationClass = '';

  ngOnChanges() {
    if (this.isOpen) {
      this.modalHidden = false;
      this.animationClass = ''; // Reset class for opening animation
    } else {
      this.animationClass = 'scale-out'; // Trigger closing animation
      setTimeout(() => {
        this.modalHidden = true;
      }, 300); // Matches animation duration
    }
  }

  closeModal() {
    this.triggerClose();
    this.cancel.emit();
  }

  onCancel() {
    this.triggerClose();
    this.cancel.emit();
  }

  onConfirm() {
    this.triggerClose();
    this.confirm.emit();
  }

  private triggerClose() {
    this.animationClass = 'scale-out';
    setTimeout(() => {
      this.modalHidden = true;
    }, 300); // Matches animation duration
  }
}
