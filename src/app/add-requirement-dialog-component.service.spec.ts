import { TestBed } from '@angular/core/testing';

import { AddRequirementDialogComponentService } from './add-requirement-dialog-component.service';

describe('AddRequirementDialogComponentService', () => {
  let service: AddRequirementDialogComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRequirementDialogComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
