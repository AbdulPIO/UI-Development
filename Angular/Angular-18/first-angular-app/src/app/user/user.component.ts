import { Component, signal, computed, Input, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

import { type User } from './user.model';
// Helper for getting random user

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// Using a type alias to outsource large objects when used in @Input
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// Using interface in place of type alias - outsourced
// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Using Input decorator
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // Instead of accepting one property as above we can accept the whole object
  @Input({ required: true }) user!: User;

  @Input({ required: true }) selected!: boolean;

  // adding custom event using Output decorator
  @Output() select = new EventEmitter();

  // Using the output() function
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }


  // Using Signal input
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() =>{return 'assets/users/' + this.avatar()});

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

