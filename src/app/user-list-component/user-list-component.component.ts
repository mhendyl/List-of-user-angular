import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { userListType } from '../interface/user-interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.scss'
})
export class UserListComponentComponent implements OnInit {
  httpCLient = inject(HttpClient);
  data: any = [];
  loading: boolean = true;
  ngOnInit(): void {
    this.loading = true;
    this.fetchUsers();
  }

  fetchUsers() {
    this.httpCLient.get('https://jsonplaceholder.typicode.com/users').subscribe(users => {
      if (users) {
        this.loading = false;
        this.data = users;
      }
    });
  }
}
