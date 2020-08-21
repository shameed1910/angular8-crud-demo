import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityListComponent } from './commodity-list.component';

describe('CommodityListComponent', () => {
  let component: CommodityListComponent;
  let fixture: ComponentFixture<CommodityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
