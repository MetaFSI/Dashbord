import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfTirageItemComponent } from './best-of-tirage-item.component';

describe('BestOfTirageItemComponent', () => {
  let component: BestOfTirageItemComponent;
  let fixture: ComponentFixture<BestOfTirageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestOfTirageItemComponent]
    });
    fixture = TestBed.createComponent(BestOfTirageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
