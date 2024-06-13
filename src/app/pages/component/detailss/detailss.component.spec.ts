import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailssComponent } from './detailss.component';

describe('DetailssComponent', () => {
  let component: DetailssComponent;
  let fixture: ComponentFixture<DetailssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
