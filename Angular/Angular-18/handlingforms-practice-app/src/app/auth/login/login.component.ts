import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild<NgForm>('form'); // using form as a selector to select the template variable and object stored in it to get access in component
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => { // execute once this component has been rendered for the first time
      const savedForm = window.localStorage.getItem('saved-login-form');

      if (savedForm) { // run only if form has some value stored
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;
        setTimeout(() => { // wait for one update behind the scenes then the form will be initialised (workaround - better approach using reactive forms)
          this.form()?.controls['email'].setValue(savedEmail);
        }, 1);
      }

      const subscription = this.form()?.valueChanges?.pipe(debounceTime(500)).subscribe({ // to get notified about changes - observable set up by angular that will emit new values whenever the values entered in the form change
        next: (value) => window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }))
      });
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    // adding validation
    // if (formData.form.invalid)
    if (!formData.form.valid) {
      return; // now nothing happens if invalid form was submitted
    }

    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    console.log(enteredEmail, enteredPassword);

    formData.form.reset(); // clears the input value and also reset all the internally managed information about the form like touched, pristine, invalid.
  }
}
