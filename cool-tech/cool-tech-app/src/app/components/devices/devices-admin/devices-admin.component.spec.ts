import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesAdminComponent } from './devices-admin.component';

describe('DevicesAdminComponent', () => {
  let component: DevicesAdminComponent;
  let fixture: ComponentFixture<DevicesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
