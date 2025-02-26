import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMedicosComponent } from './show-medicos.component';

describe('ShowMedicosComponent', () => {
  let component: ShowMedicosComponent;
  let fixture: ComponentFixture<ShowMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMedicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
