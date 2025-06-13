import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private svc: UserService, private router: Router) { }
  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getUsers().subscribe(data => this.users = data);
  }

  view(id: number) { this.router.navigate(['/user', id]); }
  edit(id: number) { this.router.navigate(['/user', id, 'edit']); }
  delete(id: number) {
    if (confirm('Delete user?')) {
      this.svc.deleteUser(id).subscribe(() => this.load());
    }
  }
  create() { this.router.navigate(['/user/create']); }
}
