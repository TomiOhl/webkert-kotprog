import { TestBed } from '@angular/core/testing';

import { SelectCikkService } from './select-cikk.service';

describe('SelectCikkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectCikkService = TestBed.get(SelectCikkService);
    expect(service).toBeTruthy();
  });
});
