import { Routes } from "@angular/router";
import { UserListComponentComponent } from "./user-list-component/user-list-component.component";
import { UserDetailsComponentComponent } from "./user-details-component/user-details-component.component";

const routeConfig: Routes = [
  {
    path: '',
    component: UserListComponentComponent,
    title: 'User List',
  },
  {
    path: 'details/:id',
    component: UserDetailsComponentComponent,
    title: 'User Details',
  },
];

export default routeConfig;
