import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardChartviewComponent} from "./dashboard.chartview.component";

describe('HomeComponent', () => {
  let component: DashboardChartviewComponent;
  let fixture: ComponentFixture<DashboardChartviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardChartviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChartviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
