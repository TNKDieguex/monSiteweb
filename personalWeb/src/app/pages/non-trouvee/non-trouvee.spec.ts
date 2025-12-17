import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTrouvee } from './non-trouvee';

describe('NonTrouvee', () => {
  let component: NonTrouvee;
  let fixture: ComponentFixture<NonTrouvee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonTrouvee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonTrouvee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
