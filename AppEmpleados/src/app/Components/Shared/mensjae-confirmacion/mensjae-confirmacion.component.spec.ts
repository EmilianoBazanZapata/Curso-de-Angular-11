import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensjaeConfirmacionComponent } from './mensjae-confirmacion.component';

describe('MensjaeConfirmacionComponent', () => {
  let component: MensjaeConfirmacionComponent;
  let fixture: ComponentFixture<MensjaeConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensjaeConfirmacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensjaeConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
