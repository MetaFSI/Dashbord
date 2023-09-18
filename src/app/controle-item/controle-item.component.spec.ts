import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleItemComponent } from './controle-item.component';

describe('ControleItemComponent', () => {
  let component: ControleItemComponent;
  let fixture: ComponentFixture<ControleItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControleItemComponent]
    });
    fixture = TestBed.createComponent(ControleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
