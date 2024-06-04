import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionDataListComponent } from './motion-data-list.component';

describe('MotionDataListComponent', () => {
  let component: MotionDataListComponent;
  let fixture: ComponentFixture<MotionDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotionDataListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotionDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
