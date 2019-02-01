import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticationDefaultGuard } from './authentication-default.guard';

describe('AuthenticationDefaultGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationDefaultGuard]
    });
  });

  it('should ...', inject([AuthenticationDefaultGuard], (guard: AuthenticationDefaultGuard) => {
    expect(guard).toBeTruthy();
  }));
});
