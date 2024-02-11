import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './user-details-component.component.html',
  styleUrl: './user-details-component.component.scss'
})
export class UserDetailsComponentComponent implements OnInit {
  httpCLient = inject(HttpClient);
  data: any = [];
  id: string = '';
  loading: boolean = true;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }
  ngOnInit(): void {
    this.loading = true;
    this.fetchUsers();
  }
  fetchUsers() {
    this.httpCLient.get(`https://jsonplaceholder.typicode.com/users/${this.id}`).subscribe(users => {
      if (users) {
        console.log('>>> users', users);

        this.loading = false;
        this.data = users;
      }
    });
  }
}
