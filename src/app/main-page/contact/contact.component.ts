import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(formRef: NgForm) {
    if(formRef.valid && formRef.submitted) {
      console.log(this.contactData);
    }
  }
}