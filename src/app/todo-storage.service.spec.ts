import { TestBed } from '@angular/core/testing';

import { TodoStorageService } from './todo-storage.service';

describe('TodoStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoStorageService = TestBed.get(TodoStorageService);
    expect(service).toBeTruthy();
  });
});
