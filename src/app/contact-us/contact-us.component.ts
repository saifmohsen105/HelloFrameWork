import { Component } from '@angular/core';
import { log } from 'node:console';
import { LinesComponent } from '../lines/lines.component';
import { FormsModule } from '@angular/forms';
import { BtmComponent } from '../btm/btm.component';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  imports: [LinesComponent, FormsModule, BtmComponent],
})
export class ContactUsComponent {
  validateForm(): void {
    const form = document.querySelector('form');
    const inputs = form?.querySelectorAll('input');
    let isValid = true;
    inputs?.forEach((input) => {
      const value = input.value.trim();
      let regex: RegExp;
      switch (input.type) {
        case 'text':
          regex = /^[a-zA-Z\s]+$/;
          break;
        case 'number':
          regex = /^[1-9]\d*$/;
          break;
        case 'email':
          regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          break;
        case 'password':
          regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
          break;
        default:
          regex = /.*/;
          alert('Please correct the errors in the form.');
          form?.setAttribute('onsubmit', 'return false');
          break;
      }

      if (!regex.test(value)) {
        isValid = false;
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    });

    if (!isValid) {
      alert('Please correct the errors in the form.');
      form?.setAttribute('onsubmit', 'return false');
    }
  }
  isEmptyInputs: boolean[] = [true, true, true, true];
  Input: string[] = ['text', 'number', 'email', 'password'];
  labelsAndPlac: string[] = [
    'username',
    'userAge',
    'userEmail',
    'userPassword',
  ];
  checkInputIsEmpty(e: Event) {
    const input = e.target as HTMLInputElement;
    const inputValue = input.value.trim();
    switch (input.id) {
      case 'username':
        this.isEmptyInputs[0] = inputValue === '';
        break;
      case 'userAge':
        this.isEmptyInputs[1] = inputValue === '';
        break;
      case 'userEmail':
        this.isEmptyInputs[2] = inputValue === '';
        break;
      case 'userPassword':
        this.isEmptyInputs[3] = inputValue === '';
        break;
    }
    console.log(this.isEmptyInputs); // result variable
  }
}
