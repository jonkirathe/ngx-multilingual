import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMultilingualComponent } from './ngx-multilingual.component';

describe('NgxMultilingualComponent', () => {
  let component: NgxMultilingualComponent;
  let fixture: ComponentFixture<NgxMultilingualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMultilingualComponent]
    });
    fixture = TestBed.createComponent(NgxMultilingualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
