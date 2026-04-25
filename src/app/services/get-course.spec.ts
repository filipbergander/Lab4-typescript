import { TestBed } from '@angular/core/testing';

import { GetCourse } from './get-course';

describe('GetCourse', () => {
  let service: GetCourse;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCourse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
