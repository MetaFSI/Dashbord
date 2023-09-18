import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstOfTirageItemComponent } from './worst-of-tirage-item.component';

describe('WorstOfTirageItemComponent', () => {
  let component: WorstOfTirageItemComponent;
  let fixture: ComponentFixture<WorstOfTirageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorstOfTirageItemComponent]
    });
    fixture = TestBed.createComponent(WorstOfTirageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
