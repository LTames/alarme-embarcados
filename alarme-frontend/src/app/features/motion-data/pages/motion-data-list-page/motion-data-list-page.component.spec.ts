import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionDataListPageComponent } from './motion-data-list-page.component';

describe('MotionDataListPageComponent', () => {
  let component: MotionDataListPageComponent;
  let fixture: ComponentFixture<MotionDataListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotionDataListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotionDataListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
