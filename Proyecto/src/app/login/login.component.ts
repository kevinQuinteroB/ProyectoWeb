import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

}

document.addEventListener('DOMContentLoaded', () => {
  const maleRadioButton = document.getElementById('gender-male');
  const femaleRadioButton = document.getElementById('gender-female');
  const telefonoInput = document.getElementById('telefono') as HTMLInputElement;


  if (maleRadioButton && femaleRadioButton) {
      maleRadioButton.addEventListener('click', () => {
          if ((maleRadioButton as HTMLInputElement).checked) {
              (femaleRadioButton as HTMLInputElement).checked = false;
          }
      });

      femaleRadioButton.addEventListener('click', () => {
          if ((femaleRadioButton as HTMLInputElement).checked) {
              (maleRadioButton as HTMLInputElement).checked = false;
          }
      });
  }
  if (telefonoInput){
    telefonoInput.addEventListener('keydown', (event) => {
      const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];

      if (!allowedKeys.includes(event.key) && !/^[0-9]$/.test(event.key)) {
          event.preventDefault();
      }
  });
  telefonoInput.addEventListener('input', () => {
    telefonoInput.value = telefonoInput.value.replace(/\D/g, '').slice(0, 10);
});
  }
});

