import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@workshop/api-interfaces';
import { UsersFacade } from '@workshop/core-state';

@Component({
  selector: 'workshop-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = this.usersFacade.allUsers$;
  selectedUser$: Observable<User> = this.usersFacade.selectedUser$;

  constructor(private usersFacade: UsersFacade) {}

  ngOnInit(): void {
    this.reset();
    this.usersFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadUsers();
    this.usersFacade.selectUser(null);
  }

  selectUser(user: User) {
    this.usersFacade.selectUser(user.id);
  }

  loadUsers() {
    this.usersFacade.loadUsers();
  }

  saveUser(user: User) {
    if (user.id) {
      this.usersFacade.updateUser(user);
    } else {
      this.usersFacade.createUser(user);
    }
  }

  deleteUser(user: User) {
    this.usersFacade.deleteUser(user);
  }
}
