import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoomCategoriesComponent } from './manage-room-categories.component';

describe('ManageRoomCategoriesComponent', () => {
  let component: ManageRoomCategoriesComponent;
  let fixture: ComponentFixture<ManageRoomCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRoomCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRoomCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
