import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxiaComponent } from './galaxia.component';

describe('GalaxiaComponent', () => {
  let component: GalaxiaComponent;
  let fixture: ComponentFixture<GalaxiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
