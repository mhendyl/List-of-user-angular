import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UserDetailsComponentComponent } from './user-details-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('UserDetailsComponentComponent', () => {
  let component: UserDetailsComponentComponent;
  let fixture: ComponentFixture<UserDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponentComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: '1' }
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user details', () => {
    const mockUserData = { id: 1, name: 'Test User' };
    const mockHttpClient = TestBed.inject(HttpClient);
    const httpClientSpy = spyOn(mockHttpClient, 'get').and.returnValue(of(mockUserData));

    component.ngOnInit();

    expect(httpClientSpy).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/1`);
    expect(component.loading).toBe(false);
    expect(component.data).toBeDefined();
  });
});
