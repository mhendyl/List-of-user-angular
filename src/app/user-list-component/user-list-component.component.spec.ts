import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UserListComponentComponent } from './user-list-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('UserListComponentComponent', () => {
  let component: UserListComponentComponent;
  let fixture: ComponentFixture<UserListComponentComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch users', () => {
    const mockUserData = [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }];
    const mockHttpClient = TestBed.inject(HttpClient);
    const httpClientSpy = spyOn(mockHttpClient, 'get').and.returnValue(of(mockUserData));

    component.fetchUsers();

    expect(httpClientSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    expect(component.loading).toBe(false);
    expect(component.data).toEqual(mockUserData);
  });
});
