import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm: FormGroup;

  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    // initializing a form
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
        'password': new FormControl(null, Validators.required),
        'confirmPassword': new FormControl(null, Validators.required)
      }, this.passwordsMatch),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });



    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    )

    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com',
        'password': '',
        'confirmPassword': ''
      },
      'gender': 'female',
      'hobbies': []
    })
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    })
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }

  // Asynchronous validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true })
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  // match passwords custom validator
  passwordsMatch(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (!password || !confirmPassword) {
      return { 'passwordMismatch': true }
    }

    return password === confirmPassword ? null : { 'passwordMismatch': true }
  }
}
