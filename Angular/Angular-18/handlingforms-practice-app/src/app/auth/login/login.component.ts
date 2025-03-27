// **************************************************************
// REACTIVE FORM

import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';

// function for custom validator
function mustContainQuestionMark(control: AbstractControl) { // ensures that our password contains atleast one question mark
  if (control.value.includes('?')) {
    return null;
  }

  return { doesNotContainQuestionMark: true };
}

// Async Validator Function
function emailIsUnique(control: AbstractControl) {
  if (control.value !== 'test@example.com') {
    return of(null); // of produces an observable that instantly emits a value like null in this case
  }

  return of({ notUnique: true });
}

// another method to prepopulate email on reload
// let initialEmailValue = '';
// const savedForm = window.localStorage.getItem('saved-login-form');

// if (savedForm) {
//   const loadedForm = JSON.parse(savedForm);
//   initialEmailValue = loadedForm.email;
// }

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  // initializing reactive form
  form = new FormGroup({
    // setting up FormControl for email and password input, we can provide intial value if needed or else leave it, the name doesn't matter
    email: new FormControl('', { // adding validators as configuration object
      validators: [Validators.email, Validators.required], //checks whether a vaild email has been entered here and ensure that it is not empty
      asyncValidators: [emailIsUnique]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark]
    })
  });

  // for showing message if invalid email is entered
  get emailIsInvalid() {
    return this.form.controls.email.touched && this.form.controls.email.dirty &&
      this.form.controls.email.invalid;
  }
  get passwordIsInvalid() {
    return this.form.controls.password.touched && this.form.controls.password.dirty &&
      this.form.controls.password.invalid;
  }

  ngOnInit() {
    const savedForm = window.localStorage.getItem('saved-login-form');

    if (savedForm) {
      const loadedForm = JSON.parse(savedForm);
      this.form.patchValue({ //partially update an overall form
        email: loadedForm.email
      });
    }

    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }))
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }

  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(enteredEmail, enteredPassword);

    this.form.reset();
  }
}





// **************************************************************
// TEMPLATE-DRIVEN FORM

// import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { debounceTime } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   private form = viewChild<NgForm>('form'); // using form as a selector to select the template variable and object stored in it to get access in component
//   private destroyRef = inject(DestroyRef);

//   constructor() {
//     afterNextRender(() => { // execute once this component has been rendered for the first time
//       const savedForm = window.localStorage.getItem('saved-login-form');

//       if (savedForm) { // run only if form has some value stored
//         const loadedFormData = JSON.parse(savedForm);
//         const savedEmail = loadedFormData.email;
//         setTimeout(() => { // wait for one update behind the scenes then the form will be initialised (workaround - better approach using reactive forms)
//           this.form()?.controls['email'].setValue(savedEmail);
//         }, 1);
//       }

//       const subscription = this.form()?.valueChanges?.pipe(debounceTime(500)).subscribe({ // to get notified about changes - observable set up by angular that will emit new values whenever the values entered in the form change
//         next: (value) => window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }))
//       });
//       this.destroyRef.onDestroy(() => subscription?.unsubscribe());
//     });
//   }

//   onSubmit(formData: NgForm) {
//     // adding validation
//     // if (formData.form.invalid)
//     if (!formData.form.valid) {
//       return; // now nothing happens if invalid form was submitted
//     }

//     const enteredEmail = formData.form.value.email;
//     const enteredPassword = formData.form.value.password;

//     console.log(enteredEmail, enteredPassword);

//     formData.form.reset(); // clears the input value and also reset all the internally managed information about the form like touched, pristine, invalid.
//   }
// }
