import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')
  signupForm: NgForm;

  defaultQuestion = 'pet';

  genders = ['male', 'female'];
  // email: NgModel;
  suggestUserName() {
    const suggestedName = 'Superuser';

    // This is not the best approch
    // this.form.setValue({
    //   userData : {
    //     username : 'vidhya',
    //     email: 'test@test.com'
    //   },
    //   gender: 'male',
    //   secret : this.defaultQuestion,
    //   questionAnswer: 'Dolly'
    // });

    this.signupForm.form.patchValue({
      userData : {
        username : 'vidhya'
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   // Will be false if no input is added
  //   console.log(form.dirty);

  //   // Form value based on name we set as attribute
  //   console.log(form.value);
  // }

  onSubmit() {
    console.log(this.signupForm);
    // Will be false if no input is added
    console.log(this.signupForm.dirty);

    // this.form value based on name we set as attribute
    console.log(this.signupForm.value);

    // console.log();
  }
}
