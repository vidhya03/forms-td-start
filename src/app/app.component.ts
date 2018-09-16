import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f')
  signupForm: NgForm;

  defaultQuestion = 'pet';

  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    sercretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  showLoader = false;
  // email: NgModel;
  constructor(private loaderService: LoaderService) {}
  public ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });

    this.loaderService.display(false);
  }
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
      userData: {
        username: 'vidhya'
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
    this.loaderService.display(true);
    console.log(this.signupForm);
    // Will be false if no input is added
    console.log(this.signupForm.dirty);

    // this.form value based on name we set as attribute
    console.log(this.signupForm.value);

    // console.log();

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.sercretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.genderData.gender;
    this.submitted = true;
    setTimeout(() => {
      this.signupForm.reset();
      this.loaderService.display(false);
    }, 4000);
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
