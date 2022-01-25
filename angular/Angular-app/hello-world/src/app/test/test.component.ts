import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{"hello " + parentData}}</h2>
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit {
  
  @Input()  public parentData: any;

  constructor() { }

  ngOnInit(): void {
  }

  
 
  
}
