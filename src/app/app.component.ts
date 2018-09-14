import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')
  form: NgForm;

  defaultQuestion = 'pet';
  @ViewChild('email')
  // email: NgModel;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   // Will be false if no input is added
  //   console.log(form.dirty);

  //   // Form value based on name we set as attribute
  //   console.log(form.value);
  // }

  onSubmit() {
    console.log(this.form);
      // Will be false if no input is added
      console.log(this.form.dirty);

      // this.form value based on name we set as attribute
      console.log(this.form.value);
      // console.log();
  }
}
