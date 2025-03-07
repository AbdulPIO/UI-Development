import { Component, signal, computed, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// Helper for getting random user

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
  // Using Zone For State Change
  // selectedUser = DUMMY_USERS[randomIndex]

  // // Getter - computed value
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // // Method
  // onSelectUser () {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }

    // Using Signal For State Change
    // selectedUser = signal(DUMMY_USERS[randomIndex]);

    // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

    // onSelectUser() {
    //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // }
}

