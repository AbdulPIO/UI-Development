import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  user?: User;
  constructor(private route: ActivatedRoute, private svc: UserService, private router: Router) { }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getUser(id).subscribe(data => this.user = data);
  }
  goEdit() {
    this.router.navigate(['/user', this.user!.id, 'edit'])
  }
}
