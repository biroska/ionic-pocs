import { TestBed } from '@angular/core/testing';

import { CpfService } from './cpf.service';

describe('CpfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpfService = TestBed.get(CpfService);
    expect(service).toBeTruthy();
  });
});
