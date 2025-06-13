import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit {
  form = this.fb.group({
    id: [],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private svc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getUser(id).subscribe(u => this.form.patchValue(u!));
  }

  save() {
    if (this.form.valid) {
      const user = this.form.getRawValue();
      this.svc.updateUser(user).subscribe(() => {
        alert('User Updated');
        this.router.navigate(['/user', user.id]);
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
