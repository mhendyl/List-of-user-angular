import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetuserService } from './getuser.service';

describe('GetuserService', () => {
  let service: GetuserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetuserService]
    });
    service = TestBed.inject(GetuserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data', () => {
    const dummyData = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' }
    ];

    service.getUserData().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyData);
    });

    const request = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(request.request.method).toBe('GET');
    request.flush(dummyData);
  });
});
