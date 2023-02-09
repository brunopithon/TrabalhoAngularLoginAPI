import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaopopupComponent } from './atualizacaopopup.component';

describe('AtualizacaopopupComponent', () => {
  let component: AtualizacaopopupComponent;
  let fixture: ComponentFixture<AtualizacaopopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaopopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizacaopopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
