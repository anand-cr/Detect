import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
@Component({
  selector: 'app-fabric-signature',
  templateUrl: './fabric-signature.component.html',
  styleUrls: ['./fabric-signature.component.css']
})
export class FabricSignatureComponent implements OnInit {
  canvas : any;
  constructor() { }

  ngOnInit(): void {
   
    this.canvas = new fabric.Canvas('canvas',{
      isDrawingMode: true
    })
  }

}
