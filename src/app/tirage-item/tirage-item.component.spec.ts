import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirageItemComponent } from './tirage-item.component';

describe('TirageItemComponent', () => {
  let component: TirageItemComponent;
  let fixture: ComponentFixture<TirageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TirageItemComponent]
    });
    fixture = TestBed.createComponent(TirageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
