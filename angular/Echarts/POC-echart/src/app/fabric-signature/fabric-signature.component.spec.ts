import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricSignatureComponent } from './fabric-signature.component';

describe('FabricSignatureComponent', () => {
  let component: FabricSignatureComponent;
  let fixture: ComponentFixture<FabricSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
