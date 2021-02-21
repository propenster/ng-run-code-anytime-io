import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptToJavaComponent } from './typescript-to-java.component';

describe('TypescriptToJavaComponent', () => {
  let component: TypescriptToJavaComponent;
  let fixture: ComponentFixture<TypescriptToJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptToJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptToJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
