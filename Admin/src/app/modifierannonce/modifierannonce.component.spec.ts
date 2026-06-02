import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierannonceComponent } from './modifierannonce.component';

describe('ModifierannonceComponent', () => {
  let component: ModifierannonceComponent;
  let fixture: ComponentFixture<ModifierannonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierannonceComponent]
    });
    fixture = TestBed.createComponent(ModifierannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
